import React from 'react'
import { useSelector } from 'react-redux'

const ContentFooter = () => {

    const items = useSelector((state) => state.todos.items);
    const itemsLeft = items.filter(item => !item.completed).length;

    const activeFilter = useSelector((state) => state.todos.activeFilter);

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft}</strong>{"  "}
                item{itemsLeft > 1 && 's'} left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className={activeFilter === 'all' ? 'selected' : ''}>All</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter === 'active' ? 'selected' : ''}>Active</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter === 'all' ? 'completed' : ''}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default ContentFooter