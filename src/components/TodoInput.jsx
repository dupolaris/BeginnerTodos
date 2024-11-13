import { useState } from "react";

export function TodoInput(props) {
  const { handleTodoInput } = props;

  const [inputValue, setInputValue] = useState("");

  //console.log(inputValue);

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add your task"
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleTodoInput(inputValue);
          setInputValue("");
        }}
      >
        <span className="text-2xl">+</span>
      </button>
    </div>
  );
}
