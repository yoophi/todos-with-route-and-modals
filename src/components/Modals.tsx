import React from "react";
import { useConfirmModalState } from "../contexts/ConfirmModalContext";

export const Modals = () => {
  const { modals } = useConfirmModalState();
  console.log({ modals });
  return (
    <>
      {modals &&
        modals.map((modal, index) => {
          const { Component, props } = modal;
          return Component && <Component key={index} {...props} />;
        })}
    </>
  );
};
