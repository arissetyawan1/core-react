import React from "react";
// import components
import Button from "../Button/Button";

// import module style components
import styles from "./Header.module.css";
const Header = ({ showToggleAdd, showAddState, clearTodos }) => {
  return (
    <section className={styles.header}>
      {/* <button className="header-btn black-color" onClick={showToggleAdd}>
        {showAddState ? "Finish" : "Add"}
      </button> */}

      {/* button di bawah ini merupakan implementasi atom complement */}
      <Button text={showAddState ? "Finish" : "Add"} onClick={showToggleAdd} />
      <h1 className={styles.headerTitle}>Todo List</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}

      {/* button di bawah ini merupakan implementasi atom complement */}
      <Button text="Clear" color="red" onClick={clearTodos} />
    </section>
  );
};

export default Header;
