import { css } from "@emotion/react";

export const Button = ({ color, theme }) => {
  let ctextColor;
  const {
    color: { primary }
  } = theme;
  switch (color) {
    case "black":
      // ctextColor = "#222222";
      //using theme
      ctextColor = primary.black;
      break;
    case "red":
      ctextColor = primary.red;
      break;
    default:
      break;
  }
  return css`
    font: size 1.8rem;
    font-family: "Bungee", sans-serif;
    padding: 16px;
    color: ${ctextColor};
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
  `;
};
