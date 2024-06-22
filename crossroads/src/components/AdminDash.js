import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Sidebar from './Sidebar';
import {  Container, Typography } from '@material-ui/core';
import Card from './Card';
import DataTable from './Datatable';
import '../styles/Dashboard.css';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
  { name: 'May', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
];
const carddata = [
    { count: 10, description: 'Calls' },
    { count: 5, description: 'Subscribers' },
    { count: 15, description: 'Comments' },
    { count: 2, description: 'Likes' },
  ];

const Dashboard = () => (
  <div className="dashboard">
    <Sidebar />
    <Container className="content">
      <Typography variant="h4">Dashboard</Typography>
      <div className='row'>
       {carddata.map((item, index) => (
        <Card key={index} count={item.count} description={item.description} />
      ))}
      </div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <DataTable/>
    </Container>
  </div>
);

export default Dashboard;