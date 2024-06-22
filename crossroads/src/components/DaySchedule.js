// src/DaySchedule.js

import React from 'react';
import Task from './Task';
import '../styles/DaySchedule.css'; // Optional: Import CSS for styling

const DaySchedule = ({ tasks }) => {
  return (
    <div className="day-schedule">
      <h2>Day Schedule</h2>
      {tasks.length > 0 ? (
        tasks.map((task, index) => <Task key={index} task={task} />)
      ) : (
        <p>No tasks scheduled for today.</p>
      )}
    </div>
  );
};

export default DaySchedule;
