import React from "react";
import Sidebar from "./Sidebar";
import { Button, Container, Typography } from "@material-ui/core";
import Card from "./Card";
import DataTable from "./Datatable";
import PastorsTable from "./PastorsTable";
import "../styles/Dashboard.css";
import { handle } from "express/lib/application";

const carddata = [
  { count: 1000, description: "Total Calls" },
  { count: 50, description: "Subscribers" },
  { count: 15, description: "Pastors" },
  { count: 100, description: "Operators" },
];
const Pastors = [
  {
    id: 1,
    caller: "Pastor Robbie Symons",
    region: "Quebec",

    sub: true,
  },
  { id: 2, caller: "Pastor Daniel", time: "2024-06-21 11:00", duration: "10m" },
  {
    id: 3,
    caller: "Rev Mike Johnson",
    region: "Ontario",

    sub: true,
  },
];
const handlePastor = () => {
  alert("this button would open a form to the creation of a new pastor");
};

const Dashboard = () => (
  <div className="dashboard">
    <Sidebar />
    <Container className="content">
      <Typography variant="h4">Administrator Dashboard</Typography>
      <div className="row">
        {carddata.map((item, index) => (
          <Card key={index} count={item.count} description={item.description} />
        ))}
      </div>
      <div style={{ margin: "10px" }}>
        <Typography variant="h5">Callers</Typography>
        <DataTable />
      </div>
      <div>
        <Typography variant="h5">Pastors</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ float: "right", marginBottom: "10px" }}
          onClick={handlePastor}
        >
          New Pastor
        </Button>
        <PastorsTable data={Pastors} />
      </div>
    </Container>
  </div>
);

export default Dashboard;
