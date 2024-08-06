import React from "react";

type BackdropLayoutProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const BackdropLayout = ({ children, onClose }: BackdropLayoutProps) => {
  return (
    <div className="absolute inset-0 z-10 flex justify-center w-full h-screen bg-black bg-opacity-75">
      <button
        className="absolute top-0 right-0 inline-block m-4 cursor-pointer"
        onClick={onClose}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div className="pt-24">{children}</div>
    </div>
  );
};
