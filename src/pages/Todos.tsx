import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTodosState } from '../contexts/TodoContext';
import { TodoItem } from '../components/TodoItem';
import { useConfirmModalDispatch } from '../contexts/ConfirmModalContext';

export const TodoListPage = () => {
  const location = useLocation();
  const todos = useTodosState();
  const dispatch = useConfirmModalDispatch();
  console.log({ dispatch });

  return (
    <div className='pt-16 w-full h-screen'>
      <h1 className='text-2xl text-gray-600 font-bold text-center'>Todos</h1>
      <div>
        <Link
          to={{
            pathname: '/todos/new',
          }}
          state={{ background: location }}
        >
          New Todo
        </Link>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: 'OPEN',
              payload: {
                message: 'sample text',
                onConfirm: () => {
                  console.log('confirmed');
                  alert('confirm modal 테스트입니다');
                  dispatch({
                    type: 'CLOSE',
                  });
                },
                onCancel: () => {
                  console.log('canceled');
                  dispatch({
                    type: 'CLOSE',
                  });
                },
              },
            });
          }}
        >
          show confirm modal
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
