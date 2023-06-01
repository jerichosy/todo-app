"use client";
import { useState } from "react";

export default function AddToDo({ handleAddToDo }) {
    const [todoToAdd, setTodoToAdd] = useState("");
    function handleChangeTodoToAdd(value) {
        setTodoToAdd(value);
    }
    function addToDo() {
        if (todoToAdd.trim()) {
            handleAddToDo(todoToAdd);
            setTodoToAdd("");
        }
    }
    return (
        <form onSubmit={(e) => { e.preventDefault(); addToDo(); }}>
            <input
                value={todoToAdd}
                type="text"
                onChange={(e) => {
                    handleChangeTodoToAdd(e.target.value);
                }}
                placeholder="Add to Do"
            />{" "}
            <button
                type="submit"
                disabled={todoToAdd.trim() === ""}
            >
                Add
            </button>
        </form>
    );
}