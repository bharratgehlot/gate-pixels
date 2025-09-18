import { useNavigate } from "react-router-dom";
import ScoreCounter from "../components/ScoreCounter";
import paper_1 from "../data/paper_1.json";
import paper_2 from "../data/paper_2.json";
import { useState } from "react";
import Question from "../components/Question";

function ExamPage() {
  // State Management for Questions Array
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = paper_1[currentIndex];
  const questionNumber = currentIndex + 1;

  // State Management for Right/Wrong Answers

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState({});

  // Page Navigation
  const navigate = useNavigate();

  // Questions Previous/Next
  const nextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(""); // Reset Selection
  };
  const prevQuestion = () => setCurrentIndex((prev) => prev - 1);

  // Boundary checks
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === paper_1.length - 1;

  // Handle Save and answer check

  const handleSaveAnswer = () => {
    let isCorrect = false;

    if (currentQuestion.type === "MSQ") {
      // Convert selectedAnswer string to array (e.g., "AC" -> ["A", "C"])
      const selectedArray = selectedAnswer.split("").sort();
      const correctArray = currentQuestion.correctAnswers.sort();

      // Check if arrays are identical
      isCorrect =
        selectedArray.length === correctArray.length &&
        selectedArray.every((val, index) => val === correctArray[index]);
    } else if (
      currentQuestion.type === "NAT" &&
      currentQuestion.correctAnswerRange
    ) {
      // ✅ Range check for NAT
      const userVal = parseFloat(selectedAnswer);
      const { min, max } = currentQuestion.correctAnswerRange;
      isCorrect = !isNaN(userVal) && userVal >= min && userVal <= max;
    } else {
      // MCQ and NAT - single answer check
      isCorrect = currentQuestion.correctAnswers.includes(selectedAnswer);
    }

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { answer: selectedAnswer, isCorrect },
    }));

    alert(isCorrect ? "Correct!" : "Wrong!");
  };

  return (
    <div className="container">
      <div className="text-center mb-3">
        <h1 className="mb-2">GATE Practice Test</h1>
        <h2 className="mb-4">
          Question {questionNumber} of {paper_1.length}
        </h2>
      </div>
      
        <ScoreCounter answers={answers} questions={paper_1} />
     
      <Question
        question={currentQuestion}
        onNext={nextQuestion}
        onPrev={prevQuestion}
        onSaveAnswer={handleSaveAnswer}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        isFirst={isFirst}
        isLast={isLast}
      />

      <div className="text-center mt-4">
        <button onClick={() => navigate("/Thankyou")}>Finish Exam</button>
      </div>
    </div>
  );
}

export default ExamPage;
