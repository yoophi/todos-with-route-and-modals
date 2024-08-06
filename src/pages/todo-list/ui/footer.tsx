import { useSearchParams } from "react-router-dom";
import { TabState, Todo } from "~/entities/todo";
import { useTodosDispatch } from "~/entities/todo/contexts/todo-context";
import { useConfirmModalDispatch } from "~/shared/contexts/confirm-modal-context";

type FooterProps = {
  todos: Todo[];
  currentTab: TabState;
};

export const Footer = ({ todos, currentTab }: FooterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useTodosDispatch();
  const { open, close } = useConfirmModalDispatch();

  const onClearCompleted = () => {
    open({
      message: "완료된 작업을 삭제하시겠습니까?",
      onConfirm: () => {
        dispatch({
          type: "CLEAR_COMPLETED",
        });
        close();
      },
      onCancel: () => {
        close();
      },
    });
  };

  return (
    <div className="flex px-4 items-center h-12 justify-center shrink-0 border-t-[1px] border-stone-300">
      <p className="absolute text-sm left-4 text-stone-500">
        {todos.filter((todo) => !todo.completed).length} left
      </p>
      <div className="flex gap-1">
        {(["All", "Active", "Completed"] as TabState[]).map((tab) => (
          <button
            key={tab}
            className={`p-1 px-2 text-lg hover:text-stone-600 ${
              currentTab === tab
                ? "outline outline-1 outline-stone-300 text-stone-600"
                : "text-stone-400"
            }`}
            onClick={() => {
              searchParams.set("filter", tab);
              setSearchParams(searchParams);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      {todos.some((todo) => todo.completed) && (
        <button
          className="absolute right-4 text-stone-400 hover:text-stone-600"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )}
    </div>
  );
};
