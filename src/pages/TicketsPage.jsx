import React from "react";
import NoTickets from "../components/NoTickets";
import TicketsList from "../components/TicketsList";

const TicketsPage = ({ tickets = [] }) => {
  // Default to empty array
  return (
    <div>
      {tickets.length === 0 ? <NoTickets /> : <TicketsList tickets={tickets} />}
    </div>
  );
};

export default TicketsPage;
