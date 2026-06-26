import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { CircleCheck, FileText, Pencil, Trash } from "lucide-react";
import { Ticket } from "@/generated/prisma/client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { deleteTicketAction } from "./actions/deleteTicketAction";
import { TicketActionButton } from "./TicketActionButton";

const TICKET_STATUS_ICONS = {
    OPEN: <FileText size={18} />,
    CLOSED: <CircleCheck size={18} />,
    IN_PROGRESS: <Pencil size={18} />
};

const EditButton = ({ ticket }: { ticket: Ticket }) => (
    <Button variant="outline" size="icon" asChild>
        <Link prefetch href={`/tickets/${ticket.id}/edit`} aria-label="Edit ticket">
            <Pencil size={18} />
        </Link>
    </Button>
);

const DetailButton = ({ ticket }: { ticket: Ticket }) => (
    <Button asChild>
        <Link prefetch href={`/tickets/${ticket.id}`} aria-label="View ticket">
            View
        </Link>
    </Button>
)

async function TicketItem({ ticket, isDetail = false }: { ticket: Ticket; isDetail?: Boolean }) {
    return (
        <div style={{ maxWidth: isDetail ? 600 : 420 }} className="flex w-full">
            <Card key={ticket.id} className="flex w-full ">
                <CardHeader className="flex flex-row gap-2 items-center">
                    <div>{TICKET_STATUS_ICONS[ticket.status]}</div>
                    <CardTitle className="text-lg font-bold truncate">{ticket.title}</CardTitle>
                </CardHeader>
                <CardContent><p className={clsx({ "line-clamp-3": !isDetail })}>{ticket.content}</p></CardContent>
            </Card>
            <div className="flex flex-col gap-2 px-2">
                <>
                    {!isDetail && <DetailButton ticket={ticket} />}
                    <EditButton ticket={ticket} />
                    <TicketActionButton ticket={ticket} action={deleteTicketAction} />
                </>
            </div>

        </div>
    )
}

export default TicketItem;