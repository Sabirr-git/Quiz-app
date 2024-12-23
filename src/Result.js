import React from "react";

function Result({ score, total }) {
  return (
    <div>
      <h1>Quiz Finished!</h1>
      <p>
        You scored {score} out of {total}.
      </p>
    </div>
  );
}

export default Result;
