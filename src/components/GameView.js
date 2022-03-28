import React, { useEffect, useState } from "react";
import Card from "./Card";
import shuffleArray from "../utils/shuffleArray";

function GameView() {
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
  const [chars, setChars] = useState([...characters]);
  const [clickedChars, setClickedChars] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setChars(chars => [...shuffleArray(chars)]);
  }, [score]);

  const checkIfClicked = (char) => {
    if (clickedChars.includes(char)) {
      console.log(char + " was previously clicked");
      setClickedChars([]);
      setScore(0);
    } else {
      console.log(char + " was not previously clicked");
      setClickedChars([...clickedChars, char]);
      setScore(score + 1);
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
