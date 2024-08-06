import { useNavigate } from "react-router-dom";
import { TodoCreateForm } from "~/widgets/todo";
import { BackdropLayout } from "~/shared/ui";

export const TodoCreatePage = () => {
  const navigate = useNavigate();
  const handleClose = () => navigate(-1);
  return (
    <BackdropLayout onClose={handleClose}>
      <TodoCreateForm />
    </BackdropLayout>
  );
};
