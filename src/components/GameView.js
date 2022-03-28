import React, { useEffect, useState } from "react";
import Card from "./Card";
import shuffleArray from "../utils/shuffleArray";

function GameView({ incrementScore, score, resetScore }) {
  const [chars, setChars] = useState([]);
  const [clickedChars, setClickedChars] = useState([]);

  useEffect(() => {
    const characters = [
      "Barry",
      "Cheryl",
      "Chokebot",
      "Cyril",
      "Katya",
      "Krieger",
      "Lana",
      "Malory",
      "Pam",
      "Ray",
      "Sterling",
      "Woodhouse",
    ];
    setChars((chars) => [...shuffleArray(characters)]);
  }, [score]);

  useEffect(() => {
    if (score & (12 === 0) && score !== 0) {
      setClickedChars([]);
    }
  }, [score]);

  const checkIfClicked = (char) => {
    if (clickedChars.includes(char)) {
      console.log(char + " was previously clicked");
      setClickedChars([]);
      resetScore();
    } else {
      console.log(char + " was not previously clicked");
      setClickedChars([...clickedChars, char]);
      incrementScore();
    }
  };

  return (
    <div id="game-view">
      {chars.map((char, index) => {
        return (
          <Card
            key={index}
            characterName={char}
            onCharClick={checkIfClicked}
            score={score}
          />
        );
      })}
    </div>
  );
}

export default GameView;
