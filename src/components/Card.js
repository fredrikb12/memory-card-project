import React from "react";
import Image from "./Image";

function Card({ characterName, onCharClick, array, index }) {
  return (
    <div id={index} className="card" onClick={(e) => onCharClick(characterName)}>
      <Image characterName={characterName} />
      <h3 className="character-name">{characterName}</h3>
    </div>
  );
}

export default Card;
