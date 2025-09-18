import "./component.css";

function Question({
  question,
  onSaveAnswer,
  onNext,
  onPrev,
  selectedAnswer,
  setSelectedAnswer,
  isFirst,
  isLast,
  submissionCount,
  maxSubmissions,
}) {
  const renderOptions = () => {
    if (question.type === "NAT") {
      return (
        <input
          type="text"
          className="nat-input"
          placeholder="Enter your answer"
          value={selectedAnswer}
          onChange={(e) => setSelectedAnswer(e.target.value)}
        />
      );
    }

    const inputType = question.type === "MCQ" ? "radio" : "checkbox";

    return question.options.map((option, index) => {
      const optionValue = String.fromCharCode(65 + index); // A, B, C, D

      return (
        <label key={index}>
          <input
            type={inputType}
            name={`q${question.id}`}
            value={optionValue}
            checked={
              question.type === "MCQ"
                ? selectedAnswer === optionValue
                : selectedAnswer.includes(optionValue)
            }
            onChange={(e) => {
              if (question.type === "MCQ") {
                setSelectedAnswer(e.target.value);
              } else {
                // MSQ handling
                const value = e.target.value;
                setSelectedAnswer((prev) =>
                  e.target.checked ? prev + value : prev.replace(value, "")
                );
              }
            }}
          />
          {option}
        </label>
      );
    });
  };

  return (
    <div className="question-container">
      <h3 className="question-text">{question.question}</h3>
      {question.note && (
        <div className="question-note">
          <p>{question.note}</p>
        </div>
      )}
      {question.image && (
        <img src={question.image} className="question-image" alt="Question" />
      )}

      <div className="options-container">{renderOptions()}</div>
      <div className="navigation-buttons">
        <button onClick={onPrev} disabled={isFirst}>
          Previous
        </button>

        <button onClick={onSaveAnswer} disabled={submissionCount >= maxSubmissions}>Save ({submissionCount}/{maxSubmissions}) </button>

        <button onClick={onNext} disabled={isLast}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Question;
