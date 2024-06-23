import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Button, Container, Typography } from "@material-ui/core";
import Card from "./Card";
import UserCallLogTable from "../components/UserCallLogTable";

const UserDash = () => {
  const carddata = [
    { count: 10, description: "Prayer Sessions Left" },
    { count: 5, description: "SMS" },
  ];
  const [callLogs, setCallLogs] = useState([
    {
      id: 1,
      caller: "Peace Of Mind",
      time: "Phone",
      duration: "5m",
      sub: true,
    },
    {
      id: 2,
      caller: "Grace",
      time: "SMS left",
      duration: "10m",
    },
    {
      id: 3,
      caller: "Addiction",
      time: "Email",
      duration: "3m",
      sub: true,
    },
  ]);
  const handleSchedule = () => {
    alert(
      "User can book a call that has an agenda aline with their topic of choice"
    );
  };
  const handleJournal = () => {
    alert(
      "User can create Journal entries of their prayer experience with application"
    );
  };
  return (
    <div className="dashboard">
      <Sidebar />
      <Container className="content">
        <Typography variant="h4">Users Dashboard</Typography>
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
            style={{ margin: "10px" }}
            onClick={handleSchedule}
          >
            Schedule Call with Pastor
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px" }}
            onClick={handleJournal}
          >
            Prayer Journal
          </Button>
        </div>
        <UserCallLogTable data={callLogs} />
      </Container>
    </div>
  );
};
export default UserDash;
