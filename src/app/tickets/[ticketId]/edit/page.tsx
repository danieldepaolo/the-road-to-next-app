import Header from "@/components/Header";
import { CardCompact } from "@/components/CardCompact";
import { getTicket } from "@/features/ticket/queries/getTicket";
import { TicketUpsertForm } from "@/features/ticket/TicketUpsertForm";
import { notFound } from "next/navigation";

async function TicketEditPage({ params }: { params: Promise<{ ticketId: string }> }) {
    const { ticketId } = await params;
    const ticket = await getTicket(ticketId);

    if (!ticket) {
        notFound();
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <Header title="Edit Ticket" description="Update an existing ticket" />
            <CardCompact title="Edit Ticket" description="Update an existing ticket" className="w-full max-w-[420px] animate-fade-in-from-top">
                <TicketUpsertForm ticket={ticket} />
            </CardCompact>
        </div>
    );
}

export default TicketEditPage;