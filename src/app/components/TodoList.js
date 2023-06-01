"use client";  // Don't use backticks here (doesn't work in JSX for some reason)

import { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
    const [activeTodo, setActiveTodo] = useState(null);
    const handleToggleStatus = (id) => { setActiveTodo(activeTodo === id ? null : id); }


    return (
        <div>
            <Todo isActive={activeTodo === 1}
                handleToggleStatus={() => {handleToggleStatus(1)}} title={'Learn JS'}
            />
            <Todo isActive={activeTodo === 2}
                handleToggleStatus={() => {handleToggleStatus(2)}} title={'Learn React'}
            />
        </div>
    )
}