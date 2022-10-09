import React from 'react'
import './Form.css'


function Form({ setInputText,InputText,ToDo,setToDo }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        setToDo([
            ...ToDo,{text:InputText,completed:false,id:Math.random()*1000}
        ])
        setInputText('');
    }
    return (
        <form action="">
            <div className='form'>
                <input value={InputText} onChange={inputTextHandler} type="text" className='todo-input' />
                <button onClick={onSubmitHandler} className='todo-button' type='submit'>
                    <i className='fas fa-plus-square'></i>
                </button>
                <div className='select'>
                    <select name='todos' className='filter-todo'>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </form>
    )
}

export default Form