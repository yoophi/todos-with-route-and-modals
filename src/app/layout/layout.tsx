import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen gap-4 bg-stone-100">
      {children}
    </div>
  );
};
