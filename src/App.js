import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import quizData from "./quizdata";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentIndex].answer) {
      setScore(score + 1);
    }
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="App">
      {isFinished ? (
        <Result score={score} total={quizData.length} />
      ) : (
        <Quiz
          question={quizData[currentIndex]}
          handleAnswer={handleAnswer}
          questionIndex={currentIndex + 1}
          totalQuestions={quizData.length}
        />
      )}
    </div>
  );
}

export default App;
