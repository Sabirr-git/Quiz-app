import React from "react";

function Quiz({ question, handleAnswer, questionIndex, totalQuestions }) {
  return (
    <div>
      <h2>Question {questionIndex}/{totalQuestions}</h2>
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
