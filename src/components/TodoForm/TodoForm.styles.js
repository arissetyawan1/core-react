import { css } from "@emotion/react";

export const add = () => {
  return css`
    padding: 16px;
  `;
};

export const addForm = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const addInput = (theme) => {
  return css`
    border: unset;
    background: unset;
    flex: 1;
    outline: unset;
    padding: 0, 64px;
    text-transform: lowercase;
    border-bottom: 1px solid ${theme.color.primary.red};
  `;
};

export const addBtn = (theme) => {
  return css`
    font-size: 1.8rem;
    padding: 16px;
    padding-right: unset;
    background: unset;
    outline: unset;
    border: unset;
    cursor: pointer;
    & :active {
      text-shadow: 1px 1px 2px var(--black-color);
    }
  `;
};
