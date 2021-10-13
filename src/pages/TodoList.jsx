// import state
import { useState } from "react";
import Paper from "../components/paper";
import Header from "../components/header";
import TodoForm from "../components/todo-form";
import Todos from "../components/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Belajar React 1",
      isCompleted: false
    },
    {
      text: "Belajar Component React",
      isCompleted: false
    },
    {
      text: "Belajar Layouting React",
      isCompleted: false
    },
    {
      text: "Belajar State React",
      isCompleted: false
    }
  ]);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value, isCompleted: false }];

    setTodos(addedTodo);
  };

  // cretae state to toggle Add Show Form
  const [addShow, setAddShow] = useState(false);

  const showToggleAdd = () => setAddShow(!addShow);

  // complete course
  const completeTodo = (index) => {
    const addTodos = [...todos];

    addTodos[index].isCompleted = !addTodos[index].isCompleted;
    setTodos(addTodos);
  };

  console.log("todos", todos);

  return (
    // JSX file
    <div className="App">
      <Paper>
        {/* header section */}
        <Header showToggleAdd={showToggleAdd} showAddState={addShow} />

        {/* Todo form section */}
        <TodoForm addTodo={addTodo} showAdd={addShow} />

        {/* Todos list */}
        <Todos todos={todos} completeTodo={completeTodo} />
      </Paper>
    </div>
  );
};

export default TodoList;
