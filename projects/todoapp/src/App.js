import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodos, setFilterTodos] = useState([])

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => {
          return todo.completed === true
        }))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      case 'all':
          setFilterTodos(todos)
        break;
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Asifa's Todo List</h1>
      </header>
        <Form setInput={setInput} todos={todos} setTodos={setTodos} input={input} setStatus={setStatus} />
        <TodoList setTodos={setTodos} todos={todos} filterTodos={filterTodos}/>
    </div>
  );
}

export default App;
