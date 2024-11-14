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

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleTodoInput(newTodo) {
    const newTodoList = [{ input: newTodo, complete: false }, ...todos];
    setTodos(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodoInList = newTodoList[index];
    completedTodoInList["complete"] = true;
    newTodoList[index] = completedTodoInList;
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        selectedTab={selectedTab}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
      <TodoInput handleTodoInput={handleTodoInput} />
    </>
  );
}

export default App;
