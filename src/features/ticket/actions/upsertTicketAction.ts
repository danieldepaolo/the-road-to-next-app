"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function upsertTicketAction(formData: FormData) {
    const data = {
        title: formData.get('title') as string,
        content: formData.get('content') as string,
    };

    const existingId = formData.get('id') as string;

    await prisma.ticket.upsert({
        where: {
            id: existingId
        },
        update: data,
        create: data
    });

    revalidatePath(`/tickets`);
    redirect(existingId ? `/tickets/${existingId}` : '/tickets');
}