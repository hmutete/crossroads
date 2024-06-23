import React, { useState } from "react";
import CallLogTable from "./CallLogTable";
import Sidebar from "./Sidebar";
import { Button, Container, Typography } from "@material-ui/core";
import Card from "./Card";

const OperatorDash = () => {
  const [callLogs, setCallLogs] = useState([
    {
      id: 1,
      caller: "John Doe",
      time: "2024-06-21 10:30",
      duration: "5m",
      sub: true,
    },
    { id: 2, caller: "Jane Smith", time: "2024-06-21 11:00", duration: "10m" },
    {
      id: 3,
      caller: "Mike Johnson",
      time: "2024-06-21 11:30",
      duration: "3m",
      sub: true,
    },
  ]);
  const carddata = [
    { count: 10, description: "Calls Today" },
    { count: 5, description: "Subscribers Signed Up" },
  ];

  const handleView = (id) => {
    alert(`View call log with ID: ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Edit call log with ID: ${id}`);
  };

  const handleSchedule = () => {
    alert(`Schedule call a with pastor of user `);
  };
  const handleNewCallLog = () => {
    alert(
      "Opens form to capture the details that a user would have shared with the operator"
    );
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <Container className="content">
        <Typography variant="h4">Operators Dashboard</Typography>
        <div className="row">
          {carddata.map((item, index) => (
            <Card
              key={index}
              count={item.count}
              description={item.description}
            />
          ))}
        </div>
        <div className="row">
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewCallLog}
          >
            <post_add /> New Call Log
          </Button>
        </div>
        <CallLogTable
          data={callLogs}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleSchedule}
        />
      </Container>
    </div>
  );
};

export default OperatorDash;
