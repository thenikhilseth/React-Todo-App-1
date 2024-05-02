import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      props.addList(inputText);
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      ></input>
      <button
        className="add-btn"
        onClick={(e) => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
