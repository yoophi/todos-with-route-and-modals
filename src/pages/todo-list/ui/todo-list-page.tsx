import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useConfirmModalDispatch } from "~/shared/contexts/confirm-modal-context";
import { TodoList } from "./todo-list";

export const TodosPage = () => {
  const { open, close } = useConfirmModalDispatch();
  const navigate = useNavigate();

  return (
    <div className="relative w-[600px]">
      <h1 className="mt-8 mb-4 font-serif text-6xl font-light text-stone-400">
        Todos
      </h1>
      <div className="absolute right-2 top-16">
        <button
          onClick={() => {
            open({
              message: "Home 으로 이동하시겠습니까?",
              onConfirm: () => {
                console.log("어떤 비즈니스 로직");
                alert("어떤 비즈니스 로직이 실행되었습니다...");
                navigate("/");
                close();
              },
              onCancel: () => {
                console.log("취소되었습니다.");
                close();
              },
            });
          }}
        >
          <FaHome className="w-5 h-5 text-stone-500" />
        </button>
      </div>
      <TodoList />
    </div>
  );
};
