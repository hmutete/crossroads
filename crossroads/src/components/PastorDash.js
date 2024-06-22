import React, { useState } from 'react';
import Sidebar from './Sidebar';
import {Container, Typography } from '@material-ui/core';
import Card from './Card';
import DaySchedule from './DaySchedule';

const PastorDash = () => {
      const carddata = [
    { count: 10, description: 'Scheduled Calls' },
    { count: 5, description: 'New Members' },
  ];
   const [tasks] = useState([
    { time: '09:00 AM', title: 'Meeting with team', description: 'Discuss project updates and next steps.' },
    { time: '11:00 AM', title: 'Code Review', description: 'Review code for the new feature implementation.' },
    { time: '01:00 PM', title: 'Lunch Break', description: '' },
    { time: '02:00 PM', title: 'Client Call', description: 'Discuss project requirements with the client.' },
    { time: '04:00 PM', title: 'Design Review', description: 'Review design mockups and provide feedback.' },
  ]);
  const handleAvailability = ()=>{alert(`This Button takes the pastor to a screen where they can upload their times they are availble for direct calls with the members.`);};
 return (
    <div className="dashboard">
    <Sidebar />
    <Container className="content">
      <Typography variant="h4">Pastors Dashboard</Typography>
      <div className='row'>
       {carddata.map((item, index) => (
        <Card key={index} count={item.count} description={item.description} />
      ))}
      </div>
      <button onClick={handleAvailability}>Availability</button>
       <DaySchedule tasks={tasks} />
    </Container>
  </div>
  );

};
export default PastorDash;