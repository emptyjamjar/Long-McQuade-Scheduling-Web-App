interface ButtonProps {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: ButtonProps) => {
  return (
    <button
      className={"btn btn-" + color}
      onClick={onClick}
      style={{
        fontSize: "15px",
        fontFamily: "Raleway",
        fontWeight: "lighter",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
