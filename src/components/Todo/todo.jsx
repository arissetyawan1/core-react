/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";

// import style module
// import styles from "./Todo.module.css";

// import css in js module
import * as styles from "./Todo.styles";
const Todo = ({ text, completeTodo, index, isCompletedTodo }) => {
  const theme = useTheme();
  return (
    // using css module
    // <div className={styles.todo} onClick={() => completeTodo(index)}>
    //   <span
    //     className={styles.todoText}
    //     style={{ textDecoration: isCompletedTodo ? "line-through" : "initial" }}
    //   >
    //     {text}
    //   </span>
    // </div>
    <div css={styles.todo(theme)} onClick={() => completeTodo(index)}>
      <span
        css={styles.todoText}
        style={{ textDecoration: isCompletedTodo ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired
};
export default Todo;
