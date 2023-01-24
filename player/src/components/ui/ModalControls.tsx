type Props = {
  children: React.ReactNode;
};

const ModalControls = ({ children }: Props) => {
  return <div className="px-6 py-4 border-t border-stone-700">{children}</div>;
};

export default ModalControls;
