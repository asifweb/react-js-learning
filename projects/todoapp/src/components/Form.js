import React from 'react'

const Form = ({setInput, todos, setTodos, input, setStatus}) => {

    const inputTextHandler = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodos([...todos, {
            text:input,
            completed: false,
            id: Math.random() * 10000
        }])
        setInput('')
    }

    const statusHandler = e => {
        setStatus(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" className="todo-input" onChange={inputTextHandler} value={input}/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Form