type Props = {
  children: React.ReactNode;
};

const ModalBody = ({ children }: Props) => {
  return <div className="px-6 py-4">{children}</div>;
};

export default ModalBody;
