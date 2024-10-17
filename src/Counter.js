import { useState } from "react";

function Counter() {
    // Initialize state with 0
    const [count, setCount] = useState(0);

    // Increment function
    function inc() {
        setCount(count + 1);
    }

    // Decrement function
    function dec() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    );
}

export default Counter;
