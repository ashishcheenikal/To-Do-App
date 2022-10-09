import "./App.css";
import React from "react";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import { useState } from "react";

function App() {
  const [InputText, setInputText] = useState('')
  const [ToDo, setToDo] = useState([])
  return (
    <div className="container App">
      <br />
      <h2>To Do App</h2>
      <br />
      <Form
        InputText={InputText}
        ToDo={ToDo}
        setToDo={setToDo}
        setInputText={setInputText} />
      <br />
      <ToDoList ToDo={ToDo}
        setToDo={setToDo}/>
      <br />

    </div>
  );
}

export default App;
