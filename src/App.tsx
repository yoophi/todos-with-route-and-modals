import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { TodoListPage } from './pages/Todos';
import { NewTodoPage } from './pages/NewTodo';
import { TodosContextProvider } from './contexts/TodoContext';
import { EditTodoPage } from './pages/EditTodoPage';
import { ConfirmModalProvider } from './contexts/ConfirmModalContext';
import { Modals } from './components/Modals';
function App() {
  const location = useLocation();
  const background = location.state?.background;
  return (
    <ConfirmModalProvider>
      <TodosContextProvider>
        <div className='w-full bg-gray-200 px-4 relative'>
          <Routes location={background || location}>
            <Route path='/' element={<HomePage />} />
            <Route path='/todos' element={<TodoListPage />} />
          </Routes>
          {background && (
            <Routes>
              <Route path='/todos'>
                <Route path='new' element={<NewTodoPage />} />
                <Route path=':id'>
                  <Route path='edit' element={<EditTodoPage />} />
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
