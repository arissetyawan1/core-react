import React from "react";

const Header = ({ showToggleAdd, showAddState, clearTodos }) => {
  return (
    <section className="header">
      <button className="header-btn black-color" onClick={showToggleAdd}>
        {showAddState ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button>
    </section>
  );
};

export default Header;
