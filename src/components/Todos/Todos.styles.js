import { css } from "@emotion/react";

export const todos = () => {
  return css`
    display: flex;
    flex-direction: column;
    min-height: 500px;
  `;
};

export const placeholderText = () => {
  return css`
    text-align: center;
    padding: 16px;
    font-size: 24px;
  `;
};
