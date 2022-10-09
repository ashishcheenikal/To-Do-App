import React from 'react'
import ToDos from './ToDos'
import './ToDoList.css'

function ToDoList({ ToDo,setToDo }) {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {
          ToDo.map((todo) => (
            <ToDos
              ToDo={ToDo}
              setToDo={setToDo}
              key={todo.id}
              todo={todo}
              todos={todo.text} />
          ))}
      </ul>
    </div>
  )
}

export default ToDoList