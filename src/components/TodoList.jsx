import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;

  //change this tab value to see changes - hard coded for now
  const tab = "All";
  const filteredTodo =
    tab === "All"
      ? todos
      : tab === "Open"
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
