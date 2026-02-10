import React, { useState } from "react";

export default function Todo() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };
    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };
    // const updateTask = (index, newTask) => {
    //     setTasks(tasks.map((t, i) => (i === index ? newTask : t)));
    // };
    return (<>
        <h2>Todo List</h2>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map((t, index) => (
                <li key={index}>
                    {t} <button onClick={() => removeTask(index)}>Remove</button>
                    {/* {t} <button onClick={() => updateTask(prompt("Update task:"))}>Update</button> */}
                </li>
            ))}
        </ul>
    </>
    );
}