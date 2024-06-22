import React, { useState } from 'react';
import Sidebar from './Sidebar';
import {Container, Typography } from '@material-ui/core';
import Card from './Card';

const UserDash = () => {
       const carddata = [
    { count: 10, description: 'Prayer Sessions Left' },
    { count: 5, description: '' },
  ];
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
     <button>Schedule Call with Pastor</button>
    </Container>
  </div>
  );
};
export default UserDash;