import React from 'react';

export const ConfirmModal = ({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className='absolute inset-0 bg-black bg-opacity-75 w-full h-screen z-10 flex items-center justify-center'>
      <div>
        <div>ConfirmModal</div>
        <div>{message}</div>
        <div>
          <button onClick={onConfirm}>확인</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
};
