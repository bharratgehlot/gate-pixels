import { useNavigate } from "react-router-dom";
import ScoreCounter from "../components/ScoreCounter";
import paper_1 from "../data/paper_1.json";
import paper_2 from "../data/paper_2.json";
import { useState } from "react";
import Question from "../components/Question";
import QuestionInfo from "../components/QuestionInfo";
import styles from './ExamPage.module.css';

function ExamPage() {
  // State Management for Questions Array

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = paper_1[currentIndex];
  const questionNumber = currentIndex + 1;

  // State Management for Right/Wrong Answers

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState({});

  // State Management for Max submission limits

  const [submissionCounts, setSubmissionCounts] = useState({});

  // Page Navigation

  const navigate = useNavigate();

  // Questions Previous/Next

  const nextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(""); // Reset Selection
    window.scrollTo(0, 0); // Scroll to Top
  };
  const prevQuestion = () => setCurrentIndex((prev) => prev - 1);

  // Boundary checks

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === paper_1.length - 1;

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>GATE Practice Test</h1>
        <h2 className={styles.subtitle}>
          Question {questionNumber} of {paper_1.length}
        </h2>
      </div>

      <div className={styles.infoContainer}>
        <QuestionInfo question={currentQuestion} />
        <ScoreCounter answers={answers} questions={paper_1} />
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
            navigate("/Thankyou", { state: { answers, questions: paper_1 } })
          }
        >
          Finish Exam
        </button>
      </div>
    </div>
  );
}

export default ExamPage;
