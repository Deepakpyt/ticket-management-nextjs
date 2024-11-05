import prisma from "@/prisma/db";
import ClientTicketForm from "@/components/ClientTicketForm";

interface Props {
  params: { id: string };
}

const EditTicket = async ({ params }: Props) => {
  const { id } = params;
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(id) },
  });

  return (
    <div>
      {ticket ? (
        <ClientTicketForm ticket={ticket} />
      ) : (
        <p className="text-destructive">Ticket not found</p>
      )}
    </div>
  );
};

export default EditTicket;
