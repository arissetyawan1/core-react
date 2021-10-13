import React, { useState } from "react";
import PropTypes from "prop-types";
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormInput = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Please, Insert value!");
    } else {
      alert(value);
      addTodo(value);
      setValue("");
    }
  };

  return (
    <section className="add">
      <form action="" className="add-form" onSubmit={handleFormInput}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.PropTypes = {
  addTodo: PropTypes.func.isRequired
};
export default TodoForm;
