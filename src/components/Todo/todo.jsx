import React from "react";
import PropTypes from "prop-types";

// import style module
import styles from "./Todo.module.css";
const Todo = ({ text, completeTodo, index, isCompletedTodo }) => {
  return (
    <div className={styles.todo} onClick={() => completeTodo(index)}>
      <span
        className={styles.todoText}
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
