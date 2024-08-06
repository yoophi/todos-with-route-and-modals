import React, { useEffect, useRef, useState } from "react";
import { useTodosDispatch } from "~/entities/todo/contexts/todo-context";
import { FaCheck } from "react-icons/fa";

export function TodoCreateForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      text: value,
    });
    setValue("");
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <form onSubmit={onSubmit}>
      <h1 className="pb-2 font-serif text-3xl font-light text-slate-300">
        New Todo
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
            className="flex-1 text-lg placeholder:italic !outline-none"
            onChange={(e) => setValue(e.target.value)}
          />
          <button>등록</button>
        </div>
      </div>
    </form>
  );
}
