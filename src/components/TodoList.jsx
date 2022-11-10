import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {

    const items = useSelector((state) => state.todos.items);
    console.log(items);
    return (
        <ul className="todo-list">
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Learn JavaScript</label>
                    <button className="destroy"></button>
                </div>
            </li>
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Learn React</label>
                    <button className="destroy"></button>
                </div>
            </li>
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Have a life!</label>
                    <button className="destroy"></button>
                </div>
            </li>
        </ul>
    )
}

export default TodoList