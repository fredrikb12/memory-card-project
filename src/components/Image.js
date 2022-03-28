import React from "react";


function Image({ characterName }) {
  return (
    <img
      className="character-image"
      src={require(`../images/${characterName}.png`)}
      alt={`$${characterName} from Archer`}
    />
  );
}

export default Image;
