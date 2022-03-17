import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, currentAttempt, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You got the word correct"
          : "You didn't find the word"}
      </h3>
      <h1>Correct: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed correctly in {currentAttempt.attempt} attempts</h3>
      )}
    </div>
  );
};

export default GameOver;
