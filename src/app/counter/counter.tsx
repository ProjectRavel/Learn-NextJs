"use client";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter</h1>
            <p style={{ fontSize: "44px" }}>{count}</p>
            <button onClick={decrement} style={{ marginRight: "10px", padding: "10px 20px", fontSize: "16px", backgroundColor: "white", color: "black", borderRadius: "10px" }}>- Decrement</button>
            <button onClick={increment} style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "white", color: "black", borderRadius: "10px" }}>Increment +</button>
        </div>
    );
}