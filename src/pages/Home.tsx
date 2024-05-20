import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl text-gray-600 font-medium'>
        Welcome!
      </h1>
      <Link to='/todos'>
        <button className='rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500'>
          Todos
        </button>
      </Link>
    </div>
  );
};
