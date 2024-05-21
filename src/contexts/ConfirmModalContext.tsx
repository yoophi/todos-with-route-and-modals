import { Dispatch, createContext, useContext, useReducer } from "react";
import { ConfirmModal } from "../components/ConfirmModal";

type Modal = {
  Component: () => JSX.Element;
  props: Record<string, unknown>;
};
type ConfirmModalState = {
  modals: Modal[];
};

const ConfirmModalStateContext = createContext<ConfirmModalState | undefined>(
  undefined,
);

type Action =
  | {
      type: "OPEN";
      payload: {
        message: string;
        onConfirm: () => void;
        onCancel: () => void;
      };
    }
  | { type: "CLOSE" };

type ConfirmModalDispatch = Dispatch<Action>;
const ConfirmModalDispatchContext = createContext<
  ConfirmModalDispatch | undefined
>(undefined);

function confirmModalReducer(
  state: ConfirmModalState,
  action: Action,
): ConfirmModalState {
  switch (action.type) {
    case "OPEN":
      console.log({ action });
      return {
        ...state,
        modals: [
          {
            Component: ConfirmModal,
            props: {
              message: action.payload.message,
              onConfirm: action.payload.onConfirm,
              onCancel: action.payload.onCancel,
            },
          },
        ],
      };
    case "CLOSE":
      return {
        ...state,
        modals: [],
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function ConfirmModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(confirmModalReducer, {
    modals: [],
    props: {},
  });

  return (
    <ConfirmModalDispatchContext.Provider value={dispatch}>
      <ConfirmModalStateContext.Provider value={state}>
        {children}
      </ConfirmModalStateContext.Provider>
    </ConfirmModalDispatchContext.Provider>
  );
}

export function useConfirmModalState() {
  const state = useContext(ConfirmModalStateContext);
  if (!state) {
    throw new Error("ConfirmModalProvider not found");
  }
  return state;
}

export function useConfirmModalDispatch() {
  const dispatch = useContext(ConfirmModalDispatchContext);
  if (!dispatch) {
    throw new Error("ConfirmModalProvider not found");
  }
  const open = ({
    message,
    onConfirm,
    onCancel,
  }: {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
  }) => {
    dispatch({
      type: "OPEN",
      payload: {
        message,
        onConfirm,
        onCancel,
      },
    });
  };

  const close = () => {
    dispatch({ type: "CLOSE" });
  };
  return { open, close };
}
