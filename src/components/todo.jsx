import React from "react";
import PropTypes from "prop-types";
const Todo = ({ text, completeTodo, index, isCompletedTodo }) => {
  return (
    <div className="todo" onClick={() => completeTodo(index)}>
      <span
        className="todo-text"
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
