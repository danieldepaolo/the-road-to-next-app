import TicketItem from "./TicketItem";
import { getTickets } from "./queries/getTickets";

export default async function TicketList() {
    const tickets = await getTickets();

    return (
        <ul className="flex flex-col gap-4 py-4 animate-fade-in-from-top">
            {tickets.map((ticket) => (
                <TicketItem key={ticket.id} ticket={ticket} />
            ))}
        </ul>
    );
}