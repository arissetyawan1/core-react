import "./styles.css";

export default function App() {
  return (
    // JSX file
    <div className="App">
      <div className="container">
        <div className="frame">
          <section className="header">
            <button className="header-btn black-color">Add</button>
            <h1 className="header-title">Todo List</h1>
            <button className="header-btn main-red-color">Clear</button>
          </section>

          <section className="add">
            <form action="" className="add-form">
              <input type="text" className="add-input" />
              <button className="add-btn black-color">Add</button>
            </form>
          </section>

          <section className="todos">
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
            <div className="todo">
              <span className="todo-text">Learning React Js</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
