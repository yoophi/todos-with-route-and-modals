import { useConfirmModalState } from "../contexts/confirm-modal-context";

export const Modals = () => {
  const { modals } = useConfirmModalState();
  return (
    <>
      {modals &&
        modals.map((modal) => {
          const { Component, props } = modal;
          return Component && <Component {...props} />;
        })}
    </>
  );
};
