import React from "react";
import Image from "./Image";

function Card({ characterName }) {
  return (
    <div className="card">
      <Image characterName={characterName} />
      <h3 className="character-name">{characterName}</h3>
    </div>
  );
}

export default Card;
