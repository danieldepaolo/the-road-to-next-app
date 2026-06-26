"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Ticket } from "@/generated/prisma/client";

export function TicketActionButton({ ticket, action }: { ticket: Ticket, action: Function }) {
    const handleAction = (id: string) => async () => {
        await action(id);
    }

    return (
        <Button variant="outline" onClick={handleAction(ticket.id)} aria-label="Delete ticket"><Trash size={18} /></Button>
    )
}