import React from "react";
import Todo from "./todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
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
    </section>
  );
};

export default Todos;
