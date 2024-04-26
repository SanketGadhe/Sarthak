import React from "react";

const AlphabetNavigation = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div>
      {alphabet.map((letter) => (
        <button key={letter}>{letter}</button>
      ))}
    </div>
  );
};

export default AlphabetNavigation;
