import { useState } from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <h1>Todos List</h1>
      <Form inputText={inputText} todos={todos} setInputText={setInputText} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
