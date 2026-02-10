import React, {useState} from "react";

export default function Hook1Example() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Guest");

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h1>Name: {name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {" "}

        </div>
    );
}