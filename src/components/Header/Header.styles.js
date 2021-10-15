import { css } from "@emotion/react";
export const header = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const headerTitle = (theme) => {
  return css`
    flex: 1;
    color: ${theme.color.primary.black};
    text-align: center;
  `;
};
