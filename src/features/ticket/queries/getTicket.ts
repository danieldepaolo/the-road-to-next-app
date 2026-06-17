import ticketsData from "@/data.json";
import { Ticket } from "@/types";

export async function getTicket(id: string): Promise<Ticket | null> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const foundTicket = ticketsData.tickets.find((ticket) => ticket.id.toString() === id);
    return foundTicket as Ticket || null;
}
