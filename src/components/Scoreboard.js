import React from "react";

function Scoreboard({ bestScore, score }) {
  return (
    <div id="scoreboard">
      <p id="best-score" className="score">
        Best Score: {bestScore}
      </p>
      <p id="current-score" className="score">
        Score: {score}
      </p>
    </div>
  );
}

export default Scoreboard;
