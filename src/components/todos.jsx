import React from "react";
import Todo from "./todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
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
        <div className="placeholder-text">
          Klik ADD button di header untuk menambahkan data
        </div>
      )}
    </section>
  );
};

export default Todos;
