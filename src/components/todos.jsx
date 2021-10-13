import React from "react";
import Todo from "./todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((index) => {
        return <Todo text={index.text} />;
      })}
    </section>
  );
};

export default Todos;
