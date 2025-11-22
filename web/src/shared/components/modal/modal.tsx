type ModalProps = {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Modal = ({
  open,
  title,
  description,
  confirmText = '나가기',
  cancelText = '계속 작성하기',
  onConfirm,
  onCancel,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[20] flex justify-center">
      <div className="relative h-full w-full max-w-[430px] bg-black/20">
        <div className="flex-col-center absolute top-1/2 right-[2.4rem] left-[2.4rem] -translate-y-1/2 gap-[2rem] rounded-[16px] bg-white px-[2.4rem] py-[2.8rem] text-center">
          <div className="flex-col-center gap-[0.8rem]">
            <p className="h3">{title}</p>
            <p className="b2 text-gray-80">{description}</p>
          </div>
          <div className="flex w-full gap-[0.8rem]">
            <button
              type="button"
              onClick={onConfirm}
              className="bg-gray-10 text-gray-70 flex-1 rounded-[12px] py-[1.2rem]"
            >
              <span className="b3">{confirmText}</span>
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-blue-80 flex-1 rounded-[12px] py-[1.2rem] text-white"
            >
              <span className="b3">{cancelText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
