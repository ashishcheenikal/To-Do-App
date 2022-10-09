import React from 'react'
import ToDos from './ToDos'
import './ToDoList.css'

function ToDoList({ ToDo,setToDo,FilterTodos }) {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {
          FilterTodos.map((todo) => (
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