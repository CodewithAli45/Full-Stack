import React, { useReducer } from 'react';

function reducer(state, action){
    switch(action.type){
        case 'ADD' :
            return [...state, {
                id: state.length + 1,
                name: action.payload,
            }];
            // case 'DELETE' :
            //     return state.filter((task => task !== action.payload));
            default :
                return state;
    } 
}

const initialState = [];
const Todos = () => {
    const [tasks, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Todo App</h1>
            <h3>Total Number of Tasks - {tasks} </h3>
            <div className="todos-elements">
                <input 
                    type="text" 
                    onChange={(e) => dispatch({type: 'ADD', payload: e.target.value})}
                />
            </div>
            <div className="diaplay-task">
                <ul>
                    {
                        tasks.map((task) => (
                            <li key={task.id}>
                                {task.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Todos;
