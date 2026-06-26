import { prisma } from "@/lib/prisma";
import { Ticket } from "@/generated/prisma/client";

export async function getTickets(): Promise<Ticket[]> {
    const tickets = await prisma.ticket.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });

    return tickets;
}
