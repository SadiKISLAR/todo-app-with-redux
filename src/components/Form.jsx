import React from 'react'
import { useState } from "react";
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { addTodo } from '../redux/todos/todosSlice'

const Form = () => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if (!title) return;
        e.preventDefault();
        dispatch(addTodo({ id: nanoid(), title, completed: false }));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus value={title}
                onChange={(e) => setTitle(e.target.value)} />
        </form >
    )
}

export default Form;