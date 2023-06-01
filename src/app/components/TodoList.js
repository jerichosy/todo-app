"use client";

import { useState } from "react";
import ToDo from "./Todo";
import AddToDo from "./AddToDo";

let nextId = 1;

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    function handleAddToDo(title) {
        setTodos([...todos, { id: nextId++, title, done: false }]);
    }
    function handleChangeToDo(id, property, newValue) {
        setTodos(
            todos.map((todo) => ({
                ...todo,
                ...(id !== todo.id ? {} : { [property]: newValue }),
            }))
        );
    }
    function handleDeleteToDo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <AddToDo handleAddToDo={handleAddToDo} />
            <h1>To-do List</h1>
            <ul style={{ listStyleType: "none", paddingTop: "1em" }}>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <ToDo
                            onChange={handleChangeToDo}
                            done={todo.done}
                            id={todo.id}
                            title={todo.title}
                            onDelete={handleDeleteToDo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}