import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  // States and data

  const [examCategory, setExamCategory] = useState("papers"); // Holds values between - papers or subjects
  const [selectedPaper, setSelectedPaper] = useState("2025_morning"); // Holds which paper or which subject
  const [userName, setUserName] = useState(""); // Name of user for later use
  const [nameError, setNameError] = useState(""); // Name validation
  const [selectedSubjectPart, setSelectedSubjectPart] = useState("1");

  // Handle Name Errors

  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.length > 30) return "Max 30 characters";
    if (!/^[a-zA-Z0-9\s-]+$/.test(name)) return "Only letters, number and spaces allowed";
    return "";
  };

  // Defines which subjects have multiple parts

  const subjectParts = {
    compiler_design: ["1", "2"],
    operating_system: ["1", "2"],
    coa: ["1", "2"]
    // add more subjects here
  };

  // Added Subject change handler

  const handleSubjectChange = (e) => {
    setSelectedPaper(e.target.value);
    setSelectedSubjectPart("1"); // Reset to paper 1
  };

  // Function to handle the examstart button

  const handleStartExam = () => {
    const error = validateName(userName);
    if (error) {
      setNameError(error);
      return;
    }
    localStorage.setItem("userName", userName.trim());
    localStorage.removeItem("scoreSaved");

    navigate("/ExamPage", {
      state: { examCategory, selectedPaper, selectedSubjectPart },
    });
  };

  // function to handle when user change category

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value; // gets either "papers", "subjects", "mock_tests"
    setExamCategory(newCategory); // updates the category
    setSelectedPaper(
      newCategory === "papers" ? "2025_morning" : "general_aptitude"
    );
    setSelectedSubjectPart("1");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome to GatePixels</h1>
        <h2 className={styles.subtitle}>Test Your Knowledge</h2>
        <p className={styles.description}>
          Practice with real GATE questions and improve your scores
        </p>

        <div className={styles.selectionContainer}>
          <div className={styles.dropdown}>
            <label>Your Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              className={styles.nameInput}
            />
            {nameError && <span className={styles.error}>{nameError}</span>}
          </div>
        </div>

        <div className={styles.selectionContainer}>
          <div className={styles.dropdown}>
            <label>Exam Type:</label>
            <select value={examCategory} onChange={handleCategoryChange}>
              <option value="papers">GATE Previous Papers</option>
              <option value="subjects">GATE Subject-wise</option>
            </select>
          </div>

          <div className={styles.dropdown}>
            <label>Select:</label>
            {examCategory === "papers" ? (
              <select
                value={selectedPaper}
                onChange={(e) => setSelectedPaper(e.target.value)}
              >
                <option value="2025_morning">GATE 2025 Morning</option>
                <option value="2025_evening">GATE 2025 Evening</option>
                <option value="2024_morning">GATE 2024 Morning</option>
                <option value="2024_evening">GATE 2024 Evening</option>
              </select>
            ) : (
              <select
                value={selectedPaper}
                onChange={handleSubjectChange}
              >
                <option value="general_aptitude">General Aptitude</option>
                <option value="engineering_maths">
                  Engineering Mathematics
                </option>
                <option value="discrete_maths">Discrete Mathematics</option>
                <option value="operating_system">Operating System</option>
                <option value="programming_and_data_structures">
                  Programming and Data Structures
                </option>
                <option value="algorithms">Algorithms</option>
                <option value="dld">Digital Logic Design</option>
                <option value="dbms">Database Management Systems</option>
                <option value="theory_of_computation">
                  Theory of Computation
                </option>
                <option value="computer_networks">Computer Networks</option>
                <option value="coa">
                  COA
                </option>
                <option value="compiler_design">Compiler Design</option>
              </select>
            )}
          </div>

          {examCategory === "subjects" && subjectParts[selectedPaper] && (
            <div className={styles.dropdown}>
              <label>Paper:</label>
              <select
                value={selectedSubjectPart}
                onChange={(e) => setSelectedSubjectPart(e.target.value)}
              >
                {subjectParts[selectedPaper].map((part) => (
                  <option key={part} value={part}>
                    Paper {part}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <button
          className={styles.startButton}
          // amazonq-ignore-next-line
          onClick={handleStartExam}
        >
          START EXAM
        </button>
      </div>
    </div>
  );
}

export default Home;
