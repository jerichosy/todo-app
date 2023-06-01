"use client";

import { useReducer, useState } from "react";
import ToDo from "./Todo";
import AddToDo from "./AddToDo";

let nextId = 1;

function todosReducer(todos = [], action) {
    switch (action.type) {
        case "add": {
            return [...todos, { id: action.id, title: action.title, done: false }];
        }
        case "change": {
            return todos.map(todo => ({
                ...todo, ...(action.id !== todo.id ? {} : { [action.property]: action.newValue })
            }))
        }
        case "delete": {
            return todos.filter(todo => todo.id !== action.id)
        }
        default: throw Error(`Unknown action: ${action.type}`);
    }
}

export default function TodoList() {
    const [todos, dispatch] = useReducer(todosReducer, []);
    function handleAddToDo(title) {
        dispatch({ type: 'add', id: nextId++, title });
    }
    function handleChangeToDo(id, property, newValue) {
        dispatch({ type: 'change', id, property, newValue });
    }
    function handleDeleteToDo(id) {
        dispatch({ type: 'delete', id });
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