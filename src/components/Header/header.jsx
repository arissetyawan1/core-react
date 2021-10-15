/** @jsxImportSource @emotion/react */
import React from "react";
// import components
import Button from "../Button/Button";

// import module style components
// import styles from "./Header.module.css";

import * as styles from "./Header.styles";
import { useTheme } from "@emotion/react";
const Header = ({ showToggleAdd, showAddState, clearTodos }) => {
  const theme = useTheme();
  return (
    // using css module
    // <section className={styles.header}>

    // using css in js module
    <section css={styles.header}>
      {/* <button className="header-btn black-color" onClick={showToggleAdd}>
        {showAddState ? "Finish" : "Add"}
      </button> */}

      {/* button di bawah ini merupakan implementasi atom complement */}
      <Button text={showAddState ? "Finish" : "Add"} onClick={showToggleAdd} />

      {/* using css module */}
      {/* <h1 className={styles.headerTitle}>Todo List</h1> */}

      {/* using css in js module */}
      <h1 css={styles.headerTitle(theme)}>Todo List</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}

      {/* button di bawah ini merupakan implementasi atom complement */}
      <Button text="Clear" color="red" onClick={clearTodos} />
    </section>
  );
};

export default Header;
