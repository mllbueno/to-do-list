import React from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">My To Do List</header>

      <Form />

      <TodoList />
    </div>
  );
}

export default App;
