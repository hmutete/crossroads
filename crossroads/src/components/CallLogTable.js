import React from "react";
import "../styles/CallLogTable.css";
import { Button, Container, Typography } from "@material-ui/core";

const CallLogTable = ({ data, onView, onEdit, onDelete }) => {
  const handleUnsubscribe = () => {
    alert("Opens form to for unsubscribe from the application");
  };
  const handleSubscribe = () => {
    alert("Opens form to for subscribing on to the application");
  };
  return (
    <table className="call-log-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Caller</th>
          <th>Time</th>
          <th>Duration</th>
          <th>Subscription</th>
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
              {call.sub}
              <div
                className={`subscription-indicator ${
                  call.sub ? "subscribed" : "unsubscribed"
                }`}
              >
                <p>{call.sub ? "Subscribed!" : "Not subscribed."}</p>
                {call.sub ? (
                  <Button onClick={handleUnsubscribe}>Unsubscribe</Button>
                ) : (
                  <Button onClick={handleSubscribe}>Subscribe</Button>
                )}
              </div>
            </td>
            <td>
              <Button onClick={() => onView(call.id)}>View</Button>
              <Button onClick={() => onEdit(call.id)}>Edit</Button>
              <Button onClick={() => onDelete(call.id)}>Schedule call</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CallLogTable;
