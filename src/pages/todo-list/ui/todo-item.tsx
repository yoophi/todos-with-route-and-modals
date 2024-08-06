import { FaRegCheckCircle, FaRegCircle, FaRegTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Todo } from "~/entities/todo";
import { useTodosDispatch } from "~/entities/todo/contexts/todo-context";
import { useConfirmModalDispatch } from "~/shared/contexts/confirm-modal-context";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodosDispatch();
  const { open, close } = useConfirmModalDispatch();
  const location = useLocation();
  const removeTodo = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id,
    });
  };
  const onCheckboxClick = () => {
    dispatch({ type: "TOGGLE", id: todo.id });
  };

  return (
    <div className="px-4 gap-2 group flex items-center h-16 border-b-[1px] border-stone-300 shrink-0">
      {todo.completed ? (
        <button
          className="flex items-center justify-center w-8"
          onClick={onCheckboxClick}
        >
          <FaRegCheckCircle className="w-6 h-6 text-stone-400 hover:text-stone-600" />
        </button>
      ) : (
        <button
          className="flex items-center justify-center w-8"
          onClick={onCheckboxClick}
        >
          <FaRegCircle className="w-6 h-6 text-stone-400 hover:text-stone-600" />
        </button>
      )}
      <p
        className={`flex-1 text-lg ${todo.completed ? "text-stone-400 line-through" : "text-stone-600"}`}
      >
        <Link to={`/todos/${todo.id}/edit`} state={{ background: location }}>
          <span className="text">{todo.content}</span>
        </Link>
      </p>
      <button
        className="invisible w-8 group-hover:visible"
        onClick={() => {
          open({
            message: `Todo #${todo.id} 을/를 삭제하시겠습니까?`,
            onConfirm: () => {
              removeTodo();
              close();
            },
            onCancel: () => {
              close();
            },
          });
        }}
      >
        <FaRegTrashAlt className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
};
