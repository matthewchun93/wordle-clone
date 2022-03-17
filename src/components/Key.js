import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyValue, bigKey, disabled }) => {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "Enter") {
      onEnter();
    } else if (keyValue === "Delete") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyValue}
    </div>
  );
};

export default Key;
