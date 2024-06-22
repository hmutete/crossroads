
import React, { useState } from 'react';
import CallLogTable from './CallLogTable';
import Sidebar from './Sidebar';
import {Container, Typography} from '@material-ui/core';
import Card from './Card';

const OperatorDash = () => {
  const [callLogs, setCallLogs] = useState([
    { id: 1, caller: 'John Doe', time: '2024-06-21 10:30', duration: '5m',sub: true },
    { id: 2, caller: 'Jane Smith', time: '2024-06-21 11:00', duration: '10m' },
    { id: 3, caller: 'Mike Johnson', time: '2024-06-21 11:30', duration: '3m',sub: true },
  ]);
  const carddata = [
    { count: 10, description: 'Calls Today' },
    { count: 5, description: 'New Subscribers' },
  ];

  const handleView = (id) => {
    alert(`View call log with ID: ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Edit call log with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setCallLogs(callLogs.filter(call => call.id !== id));
  };

  return (
    <div className="dashboard">
    <Sidebar />
    <Container className="content">
      <Typography variant="h4">Operators Dashboard</Typography>
      <div className='row'>
       {carddata.map((item, index) => (
        <Card key={index} count={item.count} description={item.description} />
      ))}
      </div>
      <div className='row'><button><post_add/> New Call Log</button></div>
      <CallLogTable data={callLogs} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  </div>
  );
};

export default OperatorDash;