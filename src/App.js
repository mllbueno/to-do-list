import './App.css';
import React, {useEffect, useState} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [nextId, setNextId] = useState(0);

  const [filtredTodo, setFiltredTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, {name: inputText, done: false, id: nextId}]);
    setInputText("");
    setNextId(nextId + 1);
  }

  //useEffect(() => {
  //  if(inputText.length > 5){
  //    setTodo([...todo, {name: inputText, done: false, id: nextId}]);
  //    setInputText("");
  //    setNextId(nextId + 1);
  //  }
  //}, [inputText]);

  return (
    <div className="App">
      <header className="App-header">
        Camilla To Do List
      </header>

      <Form onInputChange={(val) => setInputText(val)} handleAddTodoClick={handleAddTodo} inputText={inputText}/>

      <TodoList todo={todo} setTodo={setTodo}/>

    </div>
  );
}

export default App;
