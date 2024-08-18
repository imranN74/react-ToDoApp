import React, { useState } from "react";

function Form(props) {
  const [tasks, setTasks] = useState("");
  function handleChange(event) {
    const taskValue = event.target.value;
    setTasks(taskValue);
  }
  return (
    <div className="form">
      <input
        type="text"
        onChange={handleChange}
        value={tasks}
        placeholder="Add Task"
      />
      <button
        onClick={() => {
          props.onClick(tasks);
          setTasks("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Form;
