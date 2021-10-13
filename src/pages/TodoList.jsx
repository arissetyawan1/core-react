// import state
import { useState } from "react";
import Paper from "../components/paper";
import Header from "../components/header";
import TodoForm from "../components/todo-form";
import Todos from "../components/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Belajar React 1"
    },
    {
      text: "Belajar Component React"
    },
    {
      text: "Belajar Layouting React"
    },
    {
      text: "Belajar State React"
    }
  ]);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  return (
    // JSX file
    <div className="App">
      <Paper>
        {/* header section */}
        <Header />

        {/* Todo form section */}
        <TodoForm addTodo={addTodo} />

        {/* Todos list */}
        <Todos todos={todos} />
      </Paper>
    </div>
  );
};

export default TodoList;
