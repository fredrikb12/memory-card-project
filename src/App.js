import { useEffect, useState } from "react";
import GameView from "./components/GameView";
import HeaderView from "./components/HeaderView";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    setScore((score) => score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  return (
    <main id="content">
      <HeaderView score={score} bestScore={bestScore} />
      <GameView
        resetScore={resetScore}
        incrementScore={incrementScore}
        score={score}
      />
    </main>
  );
}

export default App;
