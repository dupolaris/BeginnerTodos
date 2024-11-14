export function TodoCard(props) {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props;

  return (
    <>
      <div>
        <p>{todo.input}</p>
        <div>
          <button
            className={
              todo.complete
                ? "text-white bg-black opacity-50 rounded-full px-2 mx-4"
                : "text-white bg-green-500 rounded-full px-2 mx-4"
            }
            disabled={todo.complete}
            onClick={() => {
              handleCompleteTodo(todoIndex);
            }}
          >
            {todo.complete ? "Completed" : "Done"}
          </button>
          <button
            className="text-white bg-red-500 rounded-full px-2 mx-1"
            onClick={() => {
              handleDeleteTodo(todoIndex);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
