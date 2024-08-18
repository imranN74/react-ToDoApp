import React, { useState } from "react";

function Tasks(props) {
  const [taskStatus, setTaskStatus] = useState(false);

  function handleSingleClick() {
    setTaskStatus((preValue) => {
      return !preValue;
    });
  }

  return (
    <div
      className="no-select"
      onDoubleClick={() => {
        props.toDelete(props.id);
      }}
    >
      <ul>
        <li
          onClick={handleSingleClick}
          style={{ textDecoration: taskStatus ? "line-through" : "none" }}
        >
          {props.taskList}
        </li>
      </ul>
    </div>
  );
}

export default Tasks;
