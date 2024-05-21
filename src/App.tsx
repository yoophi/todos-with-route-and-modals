import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { TodosPage } from "./pages/TodosPage";
import { TodoCreatePage } from "./pages/TodoCreatePage";
import { TodosContextProvider } from "./contexts/TodoContext";
import { TodoModifyPage } from "./pages/TodoModifyPage";
import { ConfirmModalProvider } from "./contexts/ConfirmModalContext";
import { Modals } from "./components/Modals";

export type TabState = "All" | "Active" | "Completed";

function App() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <ConfirmModalProvider>
      <TodosContextProvider>
        <div className="flex flex-col items-center w-screen h-screen gap-4 bg-stone-100">
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
        </div>
      </TodosContextProvider>
      <Modals />
    </ConfirmModalProvider>
  );
}

export default App;
