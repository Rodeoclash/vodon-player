import BaseModal, { Props } from "react-modal";

const Modal = ({ children, ...props }: Props) => {
  return (
    <BaseModal
      overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      className="bg-zinc-800 z-30 relative min-w-[40rem]"
      {...props}
    >
      {children}
    </BaseModal>
  );
};

export default Modal;
