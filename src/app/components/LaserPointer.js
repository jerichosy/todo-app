"use client";  // Don't use backticks here (doesn't work in JSX for some reason)

import { useState } from "react";

export default function LaserPointer() {
    const [position, setPosition] = (useState({ x: 0, y: 0 }));
    const onMove = e => { setPosition({ x: e.clientX, y: e.clientY }); };
    const newCoordinates = `${position.x}px, ${position.y}px`;
    return (
        <div onPointerMove={onMove}
            style={{ position: 'relative', width: '100vw', height: '100vh'}}
        >
            <div style={{ position: 'fixed',
                backgroundColor: 'red', borderRadius: '50%',
                transform: `translate(${newCoordinates})`,
                left: -10, top: -10, width: 20, height: 20
            }} />
        </div>
    )
}
