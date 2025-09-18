import { useMemo } from "react";

function ScoreCounter({answers, questions}) {

  const score = useMemo(()=>{
    return Object.entries(answers).reduce((total, [questionID, answerData]) => {
      const question = questions.find(q => q.id === parseInt(questionID));
      if (!question) return total

      console.log(`Q${questionID}: type=${question.type}, correct=${answerData.isCorrect}, negativeMarks=${question.negativeMarks}`);
      
      if (answerData.isCorrect) {
        return total + question.marks;
      } else if (question.type === "MCQ" && answerData.answer && question.negativeMarks > 0) {
        console.log(`Subtracting ${question.negativeMarks} for MCQ Q${questionID}`);
        return total - question.negativeMarks;
      }
      return total;
    }, 0); 
   
  },[answers, questions]);

  return (
    <div className="score-counter">
      <h3>Score: {score}/100</h3>
    </div>
  )

}

export default ScoreCounter;