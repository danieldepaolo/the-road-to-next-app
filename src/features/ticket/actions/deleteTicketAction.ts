"use server";

import { redirect } from "next/navigation";
import { deleteTicket } from "../queries/deleteTicket";
import { revalidatePath } from "next/cache";

export async function deleteTicketAction(id: string) {
    await deleteTicket(id);

    revalidatePath('/tickets');
    redirect('/tickets');
}
