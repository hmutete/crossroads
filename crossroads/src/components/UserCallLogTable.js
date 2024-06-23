import React from "react";
import "../styles/CallLogTable.css";
import { Button } from "@material-ui/core";

const UserCallLogTable = ({ data }) => {
  const handleComments = () => {
    alert(
      "Allows the User to add comments or notes for their self reflection "
    );
  };
  const handleBibleVerse = () => {
    alert("User can add bible verse the learn from a session");
  };

  return (
    <table className="call-log-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Topic</th>
          <th>Communication Type</th>
          <th>Duration</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((call, index) => (
          <tr key={index}>
            <td>{call.id}</td>
            <td>{call.caller}</td>
            <td>{call.time}</td>
            <td>{call.duration}</td>

            <td>
              <Button onClick={handleComments}>Add Comment</Button>
              <Button onClick={handleBibleVerse}>Add Bible Verse</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserCallLogTable;
