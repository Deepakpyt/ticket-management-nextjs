import TicketDetails from "@/components/TicketDetails";
import prisma from "@/prisma/db";
import React from "react";

interface Props {
  params: { id: string };
}

const ViewTicket = async ({ params }: Props) => {
  const { id } = params;
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(id) },
  });

  if (!ticket) {
    return <p className="text-destructive">Ticket Not Found</p>;
  }
  return <TicketDetails ticket={ticket} />;
};

export default ViewTicket;
