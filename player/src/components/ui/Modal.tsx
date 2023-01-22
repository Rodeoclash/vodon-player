import BaseModal, { Props } from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modal = ({ children, ...props }: Props) => {
  return (
    <BaseModal
      overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center"
      className="bg-stone-800 p-4"
      {...props}
    >
      {children}
    </BaseModal>
  );
};

export default Modal;
