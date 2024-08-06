import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "~/pages/home";
import { TodoCreatePage } from "~/pages/todo-create";
import { TodosPage } from "~/pages/todo-list";
import { TodoModifyPage } from "~/pages/todo-modify";

export const Root: React.FC = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/todos">
            <Route path="new" element={<TodoCreatePage />} />
            <Route path=":id">
              <Route path="edit" element={<TodoModifyPage />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
