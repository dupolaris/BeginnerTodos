import { useEffect, useState } from "react";

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
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    //edit/modify todos
    let newTodoList = [...todos];
    let completedTodoInList = newTodoList[index];
    completedTodoInList["complete"] = true;
    newTodoList[index] = completedTodoInList;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  //to persist latest data in local database
  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  //useEffect Hook
  //if [] is empty its called on mount event - means : run as soon as page is available
  //pass todos to make it active whenever todos change
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }

    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

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
