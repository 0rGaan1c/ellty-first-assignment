import "./style.css";

const Button = ({ onClick, children, type = "button" }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
