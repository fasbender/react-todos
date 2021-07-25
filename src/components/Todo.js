import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import './main.css'

const Todo = ({ todo, setTodos, todos }) => {

    const deleteHandler = () => {
        setTodos(
            todos.filter((el) => el.id !== todo.id)
        )
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
    <div className="todo">
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
        <div className="todo-action">
            <button className="todo-button-check" onClick={completeHandler}>
                <FontAwesomeIcon icon={faCheck} className="todo-check"/>
            </button>
            <button className="todo-button-trash" onClick={deleteHandler}>
                <FontAwesomeIcon icon={faTrash} className="todo-trash"/>
            </button>
        </div>
    </div>
    )
}

export default Todo
