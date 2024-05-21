import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Todo, useTodosState } from "../contexts/TodoContext";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TodoItem } from "./TodoItem";
import { useMemo } from "react";

export const TodoList = () => {
  const location = useLocation();
  const todos = useTodosState();
  const [searchParams] = useSearchParams();
  if (!searchParams.get("filter")) {
    searchParams.set("filter", "All");
  }
  const currentTab = searchParams.get("filter");
  const filteredTodos = useMemo<Todo[]>(() => {
    if (currentTab === "All") {
      return todos;
    }
    return currentTab === "Active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);
  }, [todos, currentTab]);

  return (
    <div className="w-[600px] max-h-[calc(100vh-200px)] flex flex-col bg-white rounded-lg drop-shadow-md">
      <Link to="/todos/new" state={{ background: location }}>
        <Header />
      </Link>
      <div className="h-full overflow-y-auto">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <Footer todos={todos} currentTab={currentTab} />
    </div>
  );
};
