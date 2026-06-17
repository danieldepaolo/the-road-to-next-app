import { Ticket } from "@/types";
import ticketsData from "@/data.json";

export async function getTickets() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return new Promise<Ticket[]>((resolve) => {
        setTimeout(() => {
            resolve(ticketsData.tickets as Ticket[]);
        }, 1000);
    });
}
