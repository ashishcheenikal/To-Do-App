import React from 'react'
import './ToDos.css'

function ToDos({ ToDo, setToDo,todo }) {
    const deleteToDos = () => {
        setToDo(ToDo.filter((elem)=>(
            elem.id !== todo.id
        )))
    }
    const completeHandler = () => {
        setToDo(ToDo.map((elem)=>{
            if(elem.id === todo.id){
                return {
                    ...elem,completed : !elem.completed
                }
            } 
            return elem
        }))
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' :'' }`}>{todo.text}</li>
            <button className='complete-btn' onClick={completeHandler}>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={deleteToDos}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default ToDos