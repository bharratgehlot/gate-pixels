import { useLocation, useNavigate } from "react-router-dom";
import ScoreCounter from "../components/ScoreCounter";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import QuestionInfo from "../components/QuestionInfo";
import styles from "./ExamPage.module.css";

function ExamPage() {
  // Page Navigation

  const navigate = useNavigate();
  const location = useLocation();

  // get paper selection from router state from Home.jsx

  const { examCategory, selectedPaper, selectedSubjectPart } =
    location.state || {
      examCategory: "papers",
      selectedPaper: "2025_morning",
      selectedSubjectPart: "1",
    };

  // State Management for Questions Array

  const [questions, setQuestions] = useState([]); // new
  const [loading, setLoading] = useState(true); // new
  const [currentIndex, setCurrentIndex] = useState(0);

  // State Management for Right/Wrong Answers

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState({});

  // State Management for Max submission limits

  const [submissionCounts, setSubmissionCounts] = useState({});

  // Dynamic paper loading

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        let questionData;

        if (examCategory === "papers") {
          // Load paper_1.json, paper_2.json, etc.
          questionData = await import(
            `../data/prev_papers/${selectedPaper}.json`
          );
        } else {
          const subjectParts = {
            compiler_design: ["1", "2"],
            operating_system: ["1", "2"],
          };

          if (subjectParts[selectedPaper] && selectedSubjectPart) {
            const paperFile = `paper_${selectedSubjectPart}`;
            questionData = await import(
              `../data/sub_wise/${selectedPaper}/${paperFile}.json`
            );
          } else {
            // Fallback to single file for subjects without multiple papers
            questionData = await import(
              `../data/sub_wise/${selectedPaper}.json`
            );
          }
        }

        setQuestions(questionData.default);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load questions:", error);
        navigate("/");
      }
    };

    loadQuestions();
  }, [examCategory, selectedPaper, selectedSubjectPart, navigate]);

  // Show Loading state

  if (loading || questions.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <h1 className={styles.title}>Loading Questions...</h1>
          </div>
        </div>
      </div>
    );
  }

  // Question rendering

  const currentQuestion = questions[currentIndex];
  const questionNumber = currentIndex + 1;

  // Boundary checks

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;

  // Questions Previous/Next

  const nextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(""); // Reset Selection
    window.scrollTo(0, 0); // Scroll to Top
  };
  const prevQuestion = () => setCurrentIndex((prev) => prev - 1);

  const handleSaveAnswer = () => {
    const currentCount = submissionCounts[currentQuestion.id] || 0;
    const maxSubmissions =
      currentQuestion.type === "MCQ"
        ? 1
        : currentQuestion.type === "MSQ"
        ? 3
        : 5;

    if (currentCount >= maxSubmissions) return;

    let isCorrect = false;

    if (currentQuestion.type === "MSQ") {
      const selectedArray = selectedAnswer.split("").sort();
      const correctArray = currentQuestion.correctAnswers.sort();
      isCorrect =
        selectedArray.length === correctArray.length &&
        selectedArray.every((val, index) => val === correctArray[index]);
    } else if (
      currentQuestion.type === "NAT" &&
      currentQuestion.correctAnswerRange
    ) {
      const userVal = parseFloat(selectedAnswer);
      const { min, max } = currentQuestion.correctAnswerRange;
      isCorrect = !isNaN(userVal) && userVal >= min && userVal <= max;
    } else {
      isCorrect = currentQuestion.correctAnswers.includes(selectedAnswer);
    }

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { answer: selectedAnswer, isCorrect },
    }));

    setSubmissionCounts((prev) => ({
      ...prev,
      [currentQuestion.id]: currentCount + 1,
    }));

    alert(isCorrect ? "Correct!" : "Wrong!");
  };

  // Get display title based on selection
  const getDisplayTitle = () => {
    if (examCategory === "papers") {
      const paperNames = {
        "2025_morning": "GATE 2025 Morning",
        "2025_evening": "GATE 2025 Evening",
        "2024_morning": "GATE 2024 Morning",
        "2024_evening": "GATE 2024 Evening",
      };
      return paperNames[selectedPaper] || selectedPaper;
    } else {
      const subjectNames = {
        general_aptitude: "General Aptitude",
        compiler_design: "Compiler Design",
        operating_system: "Operating Systems",
        dbms: "Database Management Systems",
        algorithms: "Algorithms",
        computer_networks: "Computer Networks",
        programming_and_data_structures: "Programming & Data Structures",
        coa: "Computer Organization & Architecture",
        theory_of_computation: "Theory of Computation",
        discrete_maths: "Discrete Mathematics",
        engineering_maths: "Engineering Mathematics",
        dld: "Digital Logic Design",
      };

      const subjectParts = {
        compiler_design: ["1", "2"],
        operating_system: ["1", "2"],
      };

      const baseName = subjectNames[selectedPaper] || selectedPaper;

      if (subjectParts[selectedPaper] && selectedSubjectPart) {
        return `GATE Practice - ${baseName} (Paper ${selectedSubjectPart})`;
      }

      return `GATE Practice - ${baseName}`;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{getDisplayTitle()}</h1>
        <h2 className={styles.subtitle}>
          Question {questionNumber} of {questions.length}
        </h2>
      </div>

      <div className={styles.infoContainer}>
        <QuestionInfo question={currentQuestion} />
        <ScoreCounter answers={answers} questions={questions} />
      </div>

      <Question
        question={currentQuestion}
        onNext={nextQuestion}
        onPrev={prevQuestion}
        onSaveAnswer={handleSaveAnswer}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        isFirst={isFirst}
        isLast={isLast}
        submissionCount={submissionCounts[currentQuestion.id] || 0}
        maxSubmissions={
          currentQuestion.type === "MCQ"
            ? 1
            : currentQuestion.type === "MSQ"
            ? 3
            : 5
        }
      />

      <div className={styles.finishSection}>
        <button
          className={styles.finishButton}
          onClick={() =>
            navigate("/Thankyou", {
              state: {
                answers,
                questions,
                examCategory,
                selectedPaper,
                selectedSubjectPart,
              },
            })
          }
        >
          Finish Exam
        </button>
      </div>
    </div>
  );
}

export default ExamPage;
