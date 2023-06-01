"use client";  // Don't use backticks here (doesn't work in JSX for some reason)

import { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
    return (
        <div>
            <Todo title={'Learn JS'} />
            <Todo title={'Learn React'} />
        </div>
    )
}