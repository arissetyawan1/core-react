import { css } from "@emotion/react";

export const paper = (theme) => {
  return css`
    width: 600px;
    height: 800px;
    background-color: ${theme.color.primary.cream};
    border-radius: 4px;
    padding: 32px;
  `;
};

export const frame = (theme) => {
  return css`
    border: 1px solid ${theme.color.primary.gray};
    height: 100%;
    display: flex;
    flex-flow: column;
  `;
};
