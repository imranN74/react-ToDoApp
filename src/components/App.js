import React, { useState } from "react";
import Tasks from "./Tasks";
import Heading from "./Heading";
import Form from "./Form";

function App() {
  const [taskArr, setItems] = useState([]);

  function handleClick(tasks) {
    setItems((preValue) => {
      return [...preValue, tasks];
    });
  }

  function deleteTask(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <Form onClick={handleClick} />
      {taskArr.map((task, index) => {
        return (
          <Tasks key={index} id={index} toDelete={deleteTask} taskList={task} />
        );
      })}
    </div>
  );
}

export default App;
