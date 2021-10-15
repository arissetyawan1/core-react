/** @jsxImportSource @emotion/react */

// import style module
import * as styles from "./Button.styles";

// import theming
import { useTheme } from "@emotion/react";
const Button = ({ text, color, onClick }) => {
  // create class utton
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "black-color",
  //   color === "red" && "main-red-color"
  // ].join(" ");

  // const cN = classNames(styles.headerBtn, {
  //   [styles.mainRedColor]: color === "red",
  //   [styles.blackColor]: color === "black"
  // });

  // panggil theme
  const theme = useTheme();
  return (
    <button css={styles.Button({ color, theme })} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
