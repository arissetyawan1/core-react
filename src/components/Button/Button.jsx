// import style module
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ text, color, onClick }) => {
  // create class utton
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "black-color",
  //   color === "red" && "main-red-color"
  // ].join(" ");

  const cN = classNames(styles.headerBtn, {
    [styles.mainRedColor]: color === "red",
    [styles.blackColor]: color === "black"
  });
  return (
    <button className={cN} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
