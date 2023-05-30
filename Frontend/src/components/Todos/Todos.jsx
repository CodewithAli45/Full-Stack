import React, { useState } from 'react';
import './Todo.css';

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        console.log("you clickec me ");
        if(inputValue.trim() !== ''){
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    function handleInput(e) {
        e.preventDefault();
        setInputValue(e.target.value)
    }
    const deletebutton = (index) => {
        const updateTodo = todos.filter((_, i) => {
            return i !== index;
        })
        setTodos(updateTodo);
    }
    return (
        <div className='container'>
            <h1>Todo App </h1>
            <input 
                type="text" 
                className='input' 
                value={inputValue}
                onChange={handleInput}
            />
            <button onClick={addTodo}>Add Task</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button className='btn' onClick={() => deletebutton(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

