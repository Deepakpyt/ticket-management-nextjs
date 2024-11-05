"use client";

import { Ticket } from "@prisma/client";
import dynamic from "next/dynamic";
import React from "react";

const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

interface ClientTicketFormProps {
  ticket: Ticket;
}

const ClientTicketForm: React.FC<ClientTicketFormProps> = ({ ticket }: ClientTicketFormProps) => {
  return <TicketForm ticket={ticket} />;
};

export default ClientTicketForm;
