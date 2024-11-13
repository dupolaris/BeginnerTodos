import { useState } from "react";

import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";

function App() {
  // const todos = [
  //   { input: "Hello, add new code", complete: true },
  //   { input: "Go to gym", complete: true },
  //   { input: "Learn React", complete: false },
  //   { input: "Get a coffee", complete: false },
  //   { input: "Get some cert", complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: "Hello, add new To-do", complete: false },
  ]);

  function handleTodoInput(newTodo) {
    const newTodoList = [{ input: newTodo, complete: false }, ...todos];
    setTodos(newTodoList);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput handleTodoInput={handleTodoInput} />
    </>
  );
}

export default App;
