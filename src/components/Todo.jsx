import React from "react";
import { useState } from "react";

const Todo = () => {
    const [value, setValue] = useState("");
    const inputHandler = (e) => {
        //console.log("e is", e);
        console.log("e is", e.target.value);
        setValue(e.target.value);
    }
    return (
        <div>
            <h3>Todo App</h3>
            <input type="text" placeholder="Enter task to add" 
            onChange={inputHandler}
            />
            <button>Add Task</button>
            <br/>
            <h4>{value}</h4>
        </div>
    );
};
export default Todo;