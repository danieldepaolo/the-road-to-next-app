import { prisma } from "@/lib/prisma";

export async function deleteTicket(id: string) {
    return await prisma.ticket.delete({
        where: {
            id
        }
    })
}
