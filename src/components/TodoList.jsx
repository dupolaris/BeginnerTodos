import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab } = props;

  //change this tab value to see changes - hard coded for now
  //const tab = "All";
  const filteredTodo =
    selectedTab === "All"
      ? todos
      : selectedTab === "Open"
      ? todos.filter((val) => !val.complete)
      : todos.filter((val) => val.complete);

  return (
    <>
      {filteredTodo.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} />;
      })}
    </>
  );
}
