import React, { useState } from "react";
import PropTypes from "prop-types";
const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFormInput = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Please, Insert value!");
    } else if (value.length > 35) {
      alert("Kepanjangan, tolong diperpendek");
    } else {
      alert(value);
      addTodo(value);
      setValue("");
    }
  };
  if (showAdd) {
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
  } else {
    return null;
  }
};

TodoForm.PropTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default TodoForm;
