import { prisma } from "@/lib/prisma";
import { Ticket } from "@/generated/prisma/client";

export const getTicket = async (id: string): Promise<Ticket | null> => {
    console.log('fetching ticket ' + id);

    return await prisma.ticket.findUnique({
        where: {
            id
        }
    });
};
