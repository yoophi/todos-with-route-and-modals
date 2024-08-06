import { useMemo } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { TabState, Todo } from "~/entities/todo";
import { useTodosState } from "~/entities/todo/contexts/todo-context";
import { Footer } from "./footer";
import { Header } from "./header";
import { TodoItem } from "./todo-item";

export const TodoList = () => {
  const location = useLocation();
  const todos = useTodosState();
  const [searchParams] = useSearchParams();
  if (!searchParams.get("filter")) {
    searchParams.set("filter", "All");
  }
  const currentTab = searchParams.get("filter") ?? "All";
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
      <Footer todos={todos} currentTab={currentTab as TabState} />
    </div>
  );
};
