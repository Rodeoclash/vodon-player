type Props = {
  children: React.ReactNode;
};

const style = {
  maxHeight: "50vh",
};

const ModalBody = ({ children }: Props) => {
  return (
    <div style={style} className="px-6 py-4 overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
};

export default ModalBody;
