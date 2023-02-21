type Props = {
  children: React.ReactNode;
};

const ModalHeader = ({ children }: Props) => {
  return <div className="px-6 py-4 border-b border-zinc-700">{children}</div>;
};

export default ModalHeader;
