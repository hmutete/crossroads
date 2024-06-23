import React from "react";
import "../styles/CallLogTable.css";
import { Button } from "@material-ui/core";

const PastorsTable = ({ data }) => {
  const handleComments = () => {
    alert("Allows the Administration to edit the Pastors profile ");
  };
  const handleBibleVerse = () => {
    alert("View Pastor's information");
  };

  return (
    <table className="call-log-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Pastor</th>
          <th>Region</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((call, index) => (
          <tr key={index}>
            <td>{call.id}</td>
            <td>{call.caller}</td>
            <td>{call.region}</td>
            <td>
              <Button onClick={handleComments}>Edit</Button>
              <Button onClick={handleBibleVerse}>View</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PastorsTable;
