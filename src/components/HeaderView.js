import React from "react";
import InfoHeader from "./InfoHeader";
import Scoreboard from "./Scoreboard";

function HeaderView({ score, bestScore }) {
  return (
    <div id="header-section">
      <InfoHeader score={score} />
      <Scoreboard score={score} bestScore={bestScore} />
    </div>
  );
}

export default HeaderView;
