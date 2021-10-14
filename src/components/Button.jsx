const Button = ({ text, color, onClick }) => {
  // create class utton
  const classNames = [
    "header-btn",
    color === "black" && "black-color",
    color === "red" && "main-red-color"
  ].join(" ");

  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
