"use client";  // Don't use backticks here (doesn't work in JSX for some reason)

import { useState } from "react";

export default function Counter() {
    // let count = 0;
    // const increment = () => { count++; };
    // const decrement = () => { count--; };

    const [count, setCount] = useState(0);
    const increment = () => { setCount(Math.min(count + 3, 50)); };
    const decrement = () => { setCount(Math.max(count - 2, -10)); };

    return (
        <div className="counter">
            <h1 className="count">{count}</h1>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
        </div>
    );
};
