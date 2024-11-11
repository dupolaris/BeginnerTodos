export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  const isTaskPlural = todos.length !== 1;
  const taskOrTasks = isTaskPlural ? "tasks." : "task.";

  return (
    <header>
      <h1>
        You have {todosLength} open {taskOrTasks}
      </h1>
    </header>
  );
}
