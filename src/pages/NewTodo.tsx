import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewTodoForm from '../components/NewTodoForm';

export const NewTodoPage = () => {
  const navigate = useNavigate();
  return (
    <div className='absolute inset-0 bg-black bg-opacity-75 w-full h-screen z-10 flex items-center justify-center'>
      <div>NewTodo</div>
      <button
        className='inline-block absolute top-0 right-0 m-4 cursor-pointer'
        onClick={() => navigate(-1)}
      >
        <svg
          class='w-6 h-6 text-white'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clip-rule='evenodd'
          />
        </svg>
      </button>
      <NewTodoForm />
    </div>
  );
};
