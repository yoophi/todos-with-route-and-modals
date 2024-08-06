import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useTodosDispatch } from "~/entities/todo";
import { useNavigate } from "react-router-dom";

export const TodoModifyForm = ({
  id,
  content,
}: {
  id: number;
  content: string;
}) => {
  const [value, setValue] = useState(content);
  const dispatch = useTodosDispatch();
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE",
      id: id,
      content: value,
    });
    navigate(-1);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <form onSubmit={onSubmit}>
      <h1 className="pb-2 font-serif text-3xl font-light text-slate-300">
        Update Todo #{id}
      </h1>
      <div className="w-[640px] flex flex-col bg-white rounded-lg drop-shadow-md">
        <div className="flex items-stretch h-16 gap-2 px-4 shrink-0 ">
          <button className="flex items-center justify-center w-8 hover:text-stone-600 text-stone-400">
            <FaCheck />
          </button>
          <input
            ref={ref}
            value={value}
            placeholder="무엇을 하실 건가요?"
            className="flex-1 text-lg  placeholder:italic !outline-none"
            onChange={(e) => setValue(e.target.value)}
          />
          <button>수정</button>
        </div>
      </div>
    </form>
  );
};
