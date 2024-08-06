import { TodosContextProvider } from "~/entities/todo";
import { ConfirmModalProvider } from "~/shared/contexts/confirm-modal-context";
import { Modals } from "~/shared/modals";
import { Layout } from "./layout";
import { Root } from "./routes";

function App() {
  return (
    <ConfirmModalProvider>
      <TodosContextProvider>
        <Layout>
          <Root />
        </Layout>
      </TodosContextProvider>
      <Modals />
    </ConfirmModalProvider>
  );
}

export default App;
