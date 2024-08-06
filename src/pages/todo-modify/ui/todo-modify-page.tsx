import { useNavigate, useParams } from "react-router-dom";
import { TodoModifyForm } from "~/widgets/todo";
import { useTodosState } from "~/entities/todo/contexts/todo-context";
import { BackdropLayout } from "~/shared/ui";

export const TodoModifyPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useTodosState();
  const filteredTodos = todos.filter((item) => item.id === Number(id));
  if (filteredTodos.length === 0) {
    return <>not found</>;
  }

  const todo = filteredTodos[0];
  const handleClose = () => navigate(-1);
  return (
    <BackdropLayout onClose={handleClose}>
      <TodoModifyForm id={Number(id)} content={todo.content} />
    </BackdropLayout>
  );
};
