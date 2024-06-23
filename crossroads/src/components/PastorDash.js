import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Button, Container, Typography } from "@material-ui/core";
import Card from "./Card";
import DaySchedule from "./DaySchedule";

const PastorDash = () => {
  const carddata = [
    { count: 10, description: "Scheduled Calls" },
    { count: 5, description: "New Members" },
  ];
  const [tasks] = useState([
    {
      time: "09:00 AM",
      title: "Call with Sarah",
      description: "Need help coming back to the path.",
    },
    {
      time: "11:00 AM",
      title: "Call with Hope",
      description: "Pray Request.",
    },
    {
      time: "01:00 PM",
      title: "Lunch Confernce call",
      description: "Prey Session with subscribers",
    },
    {
      time: "02:00 PM",
      title: "Open",
      description: "",
    },
    {
      time: "04:00 PM",
      title: "SMS Chat with Zack",
      description: "",
    },
  ]);
  const handleAvailability = () => {
    alert(
      `This Button takes the pastor to a screen where they can upload their times they are availble for direct calls with the members.`
    );
  };
  const handleFollowers = () => {
    alert(
      `This Button takes the pastor to list of members that are part of his church.`
    );
  };
  return (
    <div className="dashboard">
      <Sidebar />
      <Container className="content">
        <Typography variant="h4">Pastors Dashboard</Typography>
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
            onClick={handleAvailability}
            style={{ margin: "10px" }}
          >
            Availability
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFollowers}
            style={{ margin: "10px" }}
          >
            Congression
          </Button>
        </div>
        <DaySchedule tasks={tasks} />
      </Container>
    </div>
  );
};
export default PastorDash;
