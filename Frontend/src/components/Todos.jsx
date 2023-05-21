import React, { useState } from 'react';

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleInput = (e) => {
        e.preventDefault();

        setNewTodo(e.target.value);
    }

    const handleSubmit = () => {
        console.log('clicked button');

        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    return (
        <div>
            <h2>Todo List</h2>
            <div>
                <input type="text" onChange={handleInput} />
                <button onClick={handleSubmit}>Add</button>
            </div>
            <p>{todos.map((a) => <h1>{a}</h1> )}</p>
        </div>
    );
}

