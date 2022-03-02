import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos, filterTodos}) => {

    return (
    <div>
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo) => {
                    return <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
                })}
            </ul>
        </div>
    </div>
  )
}

export default TodoList