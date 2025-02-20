import React from "react";

const TicketsList = ({ tickets }) => {
  return (
    <div>
      <h2>Your Booked Tickets</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>{ticket.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsList;
