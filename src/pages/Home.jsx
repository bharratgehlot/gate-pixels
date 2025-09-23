import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [examCategory, setExamCategory] = useState("papers"); // Holds values between prev year paper and subject specific question - papers or subjects

  const [selectedPaper, setSelectedPaper] = useState("2025_morning");
  // Holds which paper in papers exactly or which subject on subject list

  // Function to handle the examstart button

  const handleStartExam = () => {
    navigate("/ExamPage", {
      state: { examCategory, selectedPaper },
    });
  };

  // function to handle when user change category

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value; // gets either "papers", "subjects", "mock_tests"
    setExamCategory(newCategory); // updates the category
    setSelectedPaper(
      newCategory === "papers" ? "2025_morning" : "compiler_design"
    );
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
                onChange={(e) => setSelectedPaper(e.target.value)}
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
                <option value="dld">Digital Logic Design (DLD)</option>
                <option value="dbms">Database Management Systems (DBMS)</option>
                <option value="theory_of_computation">
                  Theory of Computation
                </option>
                <option value="computer_networks">Computer Networks</option>
                <option value="coa">
                  Computer Organization and Architecture
                </option>
                <option value="compiler_design">Compiler Design</option>
              </select>
            )}
          </div>
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
