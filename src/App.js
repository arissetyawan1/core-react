import "./styles.css";
import TodoList from "./pages/TodoList";
// menggunakan theme
import { ThemeProvider } from "@emotion/react";

const theme = {
  color: {
    primary: {
      black: "#222222",
      red: "#e42929"
    }
  }
};
export default function App() {
  return (
    // JSX file
    <ThemeProvider theme={theme}>
      <div className="App">
        <TodoList />
      </div>
    </ThemeProvider>
  );
}
