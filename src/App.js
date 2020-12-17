import './App.css';
import React, {useState} from "react";
import Form from "./components/Form";

function App() {

  const [inputText, setInputText] = useState("");

  console.log(inputText);

  return (
    <div className="App">
      <header className="App-header">
        Camilla To Do List
      </header>

      <Form onInputChange={(val) => setInputText(val)}/>
    </div>
  );
}

export default App;
