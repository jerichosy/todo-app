"use client";  // Don't use backticks here (doesn't work in JSX for some reason)

import { useState } from "react";

export default function Todo({ id, title, done, onChange, onDelete }) {
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

    return (
        <>
            <input type='checkbox' checked={done} onChange={e => { onChange(id, 'done', e.target.checked) }} />{" "}
            <input type='text' value={title} onChange={e => onChange(id, 'title', e.target.value)} />{" "}
            <button type='button' onClick={() => { onDelete(id) }}>Delete</button>
        </>
    )
}