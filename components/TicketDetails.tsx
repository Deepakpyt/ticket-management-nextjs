import { Ticket } from "@prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import TicketStatusBadge from "./TicketStatusBadge";
import TicketPriority from "./TicketPriority";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import ReactMarkdown from "react-markdown";
import DeleteButton from "@/app/tickets/[id]/DeleteButton";

interface Props {
  ticket: Ticket;
}

const TicketDetails = ({ ticket }: Props) => {
  return (
    // <div>
    //   <p>{ticket.title}</p>
    //   <p>{ticket.description}</p>
    // </div>
    <div className="lg:grid lg:grid-cols-4">
      <Card className="mx-4 mb-4 lg:col-span-3 lg:mr-4">
        <CardHeader>
          <div className="flex justify-between mb-3">
            <TicketStatusBadge status={ticket.status} />
            <TicketPriority priority={ticket.priority} />
          </div>

          <CardTitle>{ticket.title}</CardTitle>
          <CardDescription>
            Created:{" "}
            {ticket.createdAt.toLocaleDateString("en-IN", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <ReactMarkdown>{ticket.description}</ReactMarkdown>
        </CardContent>
        <CardFooter>
          <p>
            Updated:{" "}
            {ticket.updatedAt.toLocaleDateString("en-IN", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </CardFooter>
      </Card>
      <div className="mx-4 flex lg:flex-col lg:mx-0 gap-2">
        <Link
          href={`/tickets/edit/${ticket.id}`}
          className={`${buttonVariants({
            variant: "default",
          })}`}
        >
          Edit Ticket
        </Link>
        <DeleteButton ticketId={ticket.id} />
      </div>
    </div>
  );
};

export default TicketDetails;
