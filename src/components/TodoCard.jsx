export function TodoCard(props) {
  const { todo } = props;

  return (
    <>
      <div>
        <p>{todo.input}</p>
        <div>
          <button disabled={todo.complete}>Completed</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
}
