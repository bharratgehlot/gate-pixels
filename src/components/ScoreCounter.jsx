import { useMemo } from "react";
import styles from "./ScoreCounter.module.css";
import { useEffect } from "react";

function ScoreCounter({ answers, questions }) {
  const score = useMemo(() => {
    return Object.entries(answers).reduce((total, [questionID, answerData]) => {
      const question = questions.find((q) => q.id === parseInt(questionID));
      if (!question) return total;

      console.log(
        `Q${questionID}: type=${question.type}, correct=${answerData.isCorrect}, negativeMarks=${question.negativeMarks}`
      );

      if (answerData.isCorrect) {
        return total + question.marks;
      } else if (
        question.type === "MCQ" &&
        answerData.answer &&
        question.negativeMarks > 0
      ) {
        console.log(
          `Subtracting ${question.negativeMarks} for MCQ Q${questionID}`
        );
        return Math.max(0, total - question.negativeMarks);
      }
      return total;
    }, 0);
  }, [answers, questions]);

  const totalMarks = useMemo(() => {
    return questions.reduce((total, question) => total + question.marks, 0);
  }, [questions]);

// Save score to localStorage whenever it changes
useEffect(() => {
  const roundedScore = Math.round(score * 100) / 100; // Round to 2 decimal places
  localStorage.setItem("finalScore", roundedScore.toString());
}, [score]);


  return (
    <div className={styles.scoreCounter}>
      <h3>
        Score: {Math.round(score * 100) / 100}/{totalMarks}
      </h3>
    </div>
  );
}

export default ScoreCounter;
