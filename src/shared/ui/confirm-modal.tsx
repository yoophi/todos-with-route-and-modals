export type ConfirmModalProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="absolute inset-0 z-10 flex justify-center w-full h-screen bg-black bg-opacity-75">
      <div className="relative bg-white rounded-md w-[480px] h-[300px] mt-16 flex flex-col">
        <h1 className="p-2 font-serif text-lg text-stone-500 border-b-[1px] mb-4">
          Confirm
        </h1>
        <div className="items-start p-8">{message}</div>
        <div className="absolute flex justify-center w-full gap-1 bottom-4">
          <button
            className="rounded-md font-bold bg-stone-500 px-3.5 py-2.5 text-sm font-serif  text-white shadow-sm hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
            onClick={onConfirm}
          >
            Ok
          </button>
          <button
            className="rounded-md bg-stone-500 px-3.5 py-2.5 text-sm font-serif  text-white shadow-sm hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
