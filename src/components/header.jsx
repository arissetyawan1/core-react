import React from "react";
// import components
import Button from "./Button";
const Header = ({ showToggleAdd, showAddState, clearTodos }) => {
  return (
    <section className="header">
      {/* <button className="header-btn black-color" onClick={showToggleAdd}>
        {showAddState ? "Finish" : "Add"}
      </button> */}

      {/* button di bawah ini merupakan implementasi atom complement */}
      <Button text={showAddState ? "Finish" : "Add"} onClick={showToggleAdd} />
      <h1 className="header-title">Todo List</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}

      {/* button di bawah ini merupakan implementasi atom complement */}
      <Button text="Clear" color="red" onClick={clearTodos} />
    </section>
  );
};

export default Header;
