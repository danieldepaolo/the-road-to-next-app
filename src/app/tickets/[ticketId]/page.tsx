import { getTicket } from "@/features/ticket/queries/getTicket";
import TicketItem from "@/features/ticket/TicketItem";
import { Ticket } from "@/types";
import { notFound } from "next/navigation";

async function TicketPage({ params }: { params: Promise<{ ticketId: string }> }) {
    const { ticketId } = await params;
    const ticket = await getTicket(ticketId);

    if (!ticket) {
        notFound();
    }

    return (
        <div className="flex justify-center h-full animate-fade-in-from-top">
            {ticket && (
                <TicketItem ticket={ticket as Ticket} isDetail />
            )}
        </div>
    );
}

export default TicketPage;
