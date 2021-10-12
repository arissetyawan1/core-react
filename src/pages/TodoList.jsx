import Paper from "../components/paper";
import Header from "../components/header";
import TodoForm from "../components/todo-form";
import Todos from "../components/todos";

const TodoList = () => {
  return (
    // JSX file
    <div className="App">
      <Paper>
        {/* header section */}
        <Header />

        {/* Todo form section */}
        <TodoForm />

        {/* Todos list */}
        <Todos />
      </Paper>
    </div>
  );
};

export default TodoList;
