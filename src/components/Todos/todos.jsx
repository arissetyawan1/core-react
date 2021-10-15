/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import React from "react";
import Todo from "../Todo/todo";

// import style module css
// import styles from "./Todos.module.css";

// import css in js using module
import * as styles from "./Todos.styles";
const Todos = ({ todos, completeTodo }) => {
  return (
    // <section className={styles.todos}>
    //   {todos.length > 0 &&
    //     todos.map((todo, index) => {
    //       return (
    //         <Todo
    //           key={index}
    //           text={todo.text}
    //           isCompletedTodo={todo.isCompleted}
    //           completeTodo={completeTodo}
    //           index={index}
    //         />
    //       );
    //     })}
    //   {todos.length === 0 && (
    //     <div className={styles.placeholderText}>
    //       Klik ADD button di header untuk menambahkan data
    //     </div>
    //   )}
    // </section>
    <section css={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompletedTodo={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div css={styles.placeholderText}>
          Klik ADD button di header untuk menambahkan data
        </div>
      )}
    </section>
  );
};

export default Todos;
