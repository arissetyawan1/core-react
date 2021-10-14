import React from "react";
import Todo from "../Todo/todo";

// import style module css
import styles from "./Todos.module.css";
const Todos = ({ todos, completeTodo }) => {
  return (
    <section className={styles.todos}>
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
        <div className={styles.placeholderText}>
          Klik ADD button di header untuk menambahkan data
        </div>
      )}
    </section>
  );
};

export default Todos;
