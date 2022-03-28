import React from "react";

function InfoHeader({ score }) {
  return (
    <div>
      <h1 id="info-header">The Archer Memory Game!</h1>
      {score % 12 === 0 && score !== 0 ? (
        <p style={{ marginTop: "50px", fontSize: "1.5rem", color: "black", width: "600px", textAlign: "center" }}>
          You clicked all the characters! Feel free to continue by clicking a
          character again!
        </p>
      ) : null}
    </div>
  );
}

export default InfoHeader;
