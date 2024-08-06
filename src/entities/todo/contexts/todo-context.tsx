import { createContext, Dispatch, useContext, useReducer } from "react";
import { Todo } from "../model/todo";

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);

type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: "CLEAR_COMPLETED" }
  | { type: "UPDATE"; id: number; content: string };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined,
);

function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    case "CREATE":
      // eslint-disable-next-line no-case-declarations
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        content: action.text,
        completed: false,
      });
    case "UPDATE":
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return { ...todo, content: action.content };
      });
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unhandled action");
  }
}

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, [
    {
      id: 1,
      content: "Context API 배우기",
      completed: true,
    },
    {
      id: 2,
      content: "TypeScript 배우기",
      completed: true,
    },
    {
      id: 3,
      content: "TypeScript 와 Context API 함께 사용하기",
      completed: false,
    },
    {
      id: 4,
      content: "Rerendering 최적화 하기",
      completed: false,
    },
    {
      id: 5,
      content: "ModalPage 를 react-router 로 리팩토링하기",
      completed: false,
    },
    {
      id: 6,
      content: "react 소스 코드 읽기",
      completed: false,
    },
  ]);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodosState() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider not found");
  return dispatch;
}
