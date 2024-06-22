// src/Task.js

import React from 'react';
import '../styles/Task.css'; // Optional: Import CSS for styling

const Task = ({ task }) => {
  return (
    <div className="task">
      <div className="task-time">{task.time}</div>
      <div className="task-title">{task.title}</div>
      <div className="task-description">{task.description}</div>
    </div>
  );
};

export default Task;
