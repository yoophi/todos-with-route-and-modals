import React from 'react';
import { Todo, useTodosDispatch } from '../contexts/TodoContext';
import { Link, useLocation } from 'react-router-dom';
type TodoItemProps = {
  todo: Todo; // TodoContext 에서 선언했던 타입을 불러왔습니다.
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodosDispatch();
  const location = useLocation();
  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id,
    });
  };

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <Link to={`/todos/${todo.id}/edit`} state={{ background: location }}>
        <span className='text'>{todo.text}</span>
      </Link>
      <span className='remove' onClick={onRemove}>
        (X)
      </span>
    </li>
  );
};
