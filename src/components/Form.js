import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './main.css'

const Form = ({ inputText, todos, setInputText, setTodos }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 10
            }
        ])
        setInputText("");
    }

    return (
        <div className="main-form">
            <input type="text" name="search" id="add" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
            <button className="search" onClick={handleSubmit}><FontAwesomeIcon icon={faPlus} /></button>
            <select name="todos" id="" className="dropdown">
                <option className="dropdown-item" value="all">All</option>
                <option className="dropdown-item" value="completed">completed</option>
                <option className="dropdown-item" value="uncompleted">uncompleted</option>
            </select>
        </div>
    )
}

export default Form
