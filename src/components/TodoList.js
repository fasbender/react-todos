import React from 'react'
import Todo from './Todo'
import './main.css'

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="main-todo">
            {todos.map((todo) => {
                return(
                    <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id}/>
                )
            })}
        </div>
    )
}

export default TodoList
