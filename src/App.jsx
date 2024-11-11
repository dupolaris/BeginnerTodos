import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";

function App() {
  const todos = [
    { input: "Hello, add new code", complete: true },
    { input: "Go to gym", complete: true },
    { input: "Learn React", complete: false },
    { input: "Get a coffee", complete: false },
    { input: "Get some cert", complete: true },
  ];

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  );
}

export default App;
