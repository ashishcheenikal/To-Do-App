import "./App.css";
import React, { useEffect } from "react";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import { useState } from "react";

function App() {
  const [InputText, setInputText] = useState("");
  const [ToDo, setToDo] = useState([]);
  const [Status, setStatus] = useState("all");
  const [FilterTodos, setFilterTodos] = useState([]);
  // useEffect(()=>{
  //   saveLocalStorage();
  //   getLocalStorage();
  // },[])
  useEffect(() => {
    filterHandler();
  }, [ToDo,Status]);

  const filterHandler = () => {
    switch (Status) {
      case "completed":
        setFilterTodos(
          ToDo.filter((elem) => (
            elem.completed === true
          ))
        );
        break;
      case "uncompleted":
        setFilterTodos(
          ToDo.filter((elem) => (
            elem.completed === false
          ))
        );
        break;
      default:
        setFilterTodos(ToDo);
        break;
    }
  };

  // const saveLocalStorage = ()=>{
  //   localStorage.setItem('ToDo',JSON.stringify(ToDo));
  // }
  // const getLocalStorage = ()=>{
  //   if(localStorage.getItem('ToDo') === null){
  //     localStorage.setItem('ToDo',JSON.stringify(ToDo));
  //   } else {
  //     let localToDo = JSON.parse(localStorage.getItem("ToDo"));
  //     setToDo(localToDo);
  //   }
  // }
  return (
    <div className="container App">
      <br />
      <h2>To Do App</h2>
      <br />
      <Form
        InputText={InputText}
        ToDo={ToDo}
        setToDo={setToDo}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <br />
      <ToDoList
       FilterTodos={FilterTodos}
       ToDo={ToDo} setToDo={setToDo} />
      <br />
    </div>
  );
}

export default App;
