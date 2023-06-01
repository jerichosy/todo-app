"use client";  // Don't use backticks here (doesn't work in JSX for some reason)

import { useState } from "react";

export default function Todo({ title }) {
    // const [todos, setTodos] = useState([
    //     { title: 'Learn React', id: 1 },
    //     { title: 'Learn Next.js', id: 2 },
    //     { title: 'Learn GraphQL', id: 3 },
    // ]);

    // const [selectedTodo, setSelectedTodo] = useState(todos[0]);

    // function handleTodoChange(newTitle) {
    //     setTodos(todos.map(todo => {
    //         todo.id != selectedTodo.id ? todo : { ...todo, title: newTitle }
    //     }));
    // }

    // return (
    //     <>
    //         <h2>To-do List</h2>
    //         <ul>
    //             {todos.map(todo => (
    //                 <li key={todo.id}>
    //                     {todo.title}
    //                     {' '}
    //                     <button type="button" onClick={() => {setSelectedTodo(todo)}}>Choose</button>
    //                 </li>
    //             ))}
    //         </ul>
    //         <p>Selected: {selectedTodo.title}</p>
    //         <p>Updating title:
    //             <input
    //                 value={selectedTodo.title}
    //                 onChange={e => handleTodoChange(e.target.value)}
    //             />
    //         </p>
    //     </>
    // )

    const [isActive, setIsActive] = useState(false);
    const toggleStatus = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            {title}{" "}
            <button onClick={toggleStatus}>
            {`Set as ${isActive ? "inactive" : "active"}`}
            </button>
        </div>
    );
}