import React from 'react';
import '../styles/CallLogTable.css'; 

const CallLogTable = ({ data, onView, onEdit, onDelete }) => {
  const handleUnsubscribe= ()=>{alert('Opens form to for unsubscribe from the application')};
  const handleSubscribe =() =>{alert('Opens form to for subscribing on to the application')};
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
            <td>{call.sub}
               <div className={`subscription-indicator ${call.sub ? 'subscribed' : 'unsubscribed'}`}>
      <p>{call.sub ? 'Subscribed!' : 'Not subscribed.'}</p>
      {call.sub ? (
        <button onClick={handleUnsubscribe}>Unsubscribe</button>
      ) : (
        <button onClick={handleSubscribe}>Subscribe</button>
      )}
    </div>
            </td>
            <td>
              <button onClick={() => onView(call.id)}>View</button>
              <button onClick={() => onEdit(call.id)}>Edit</button>
              <button onClick={() => onDelete(call.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CallLogTable;