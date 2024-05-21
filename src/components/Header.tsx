import { FaCheck } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex items-stretch h-16 gap-2 px-4 border-b-2 focus-within:outline focus-within:outline-2 focus-within:outline-blue-300 border-stone-300 shrink-0 ">
      <button className="flex items-center justify-center w-8 hover:text-stone-600 text-stone-400">
        <FaCheck />
      </button>
      <div className="flex-1 py-4 text-lg italic text-stone-400">
        What needs to be done?
      </div>
    </div>
  );
};
