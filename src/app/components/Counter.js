"use client";  // Don't use backticks here (doesn't work in JSX for some reason)

import { useState } from "react";

export default function Counter() {
    // let count = 0;
    // const increment = () => { count++; };
    // const decrement = () => { count--; };

    const [count, setCount] = useState(0);
    const increment = () => { setCount(count + 1); };
    const decrement = () => { setCount(count - 1); };

    return (
        <div className="counter">
            <h1 className="count">{count}</h1>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
        </div>
    );
};
