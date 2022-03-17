import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPosition, attemptValue }) => {
  const {
    board,
    correctWord,
    currentAttempt,
    disabledLetters,
    setDisabledLetters,
  } = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord.toUpperCase()[letterPosition] === letter;
  const almost =
    correct === false &&
    letter !== "" &&
    correctWord.includes(letter.toLowerCase());
  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt, almost, letter, correct, setDisabledLetters]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
