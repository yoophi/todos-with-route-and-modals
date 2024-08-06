import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="font-serif text-3xl font-medium text-center text-gray-600">
        Welcome!
      </h1>
      <Link to="/todos">
        <button className="px-4 py-2 mt-4 font-serif text-white rounded-lg bg-stone-500 hover:bg-stone-600">
          Todos
        </button>
      </Link>
    </div>
  );
};
