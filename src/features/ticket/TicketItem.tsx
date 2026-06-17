import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { CircleCheck, FileText, LucideSquareArrowOutUpRight, Pencil } from "lucide-react";
import { Ticket } from "@/types";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const TICKET_STATUS_ICONS = {
    Open: <FileText size={18} />,
    Closed: <CircleCheck size={18} />,
    "In Progress": <Pencil size={18} />
};

function TicketItem({ ticket, isDetail = false }: { ticket: Ticket; isDetail?: Boolean }) {

    console.log('rendering TicketItem');
    return (
        <div style={{ maxWidth: isDetail ? 600 : 420 }} className="flex">
            <Card key={ticket.id} className="flex w-full ">
                <CardHeader className="flex flex-row gap-2 items-center">
                    <div>{TICKET_STATUS_ICONS[ticket.status]}</div>
                    <CardTitle className="text-lg font-bold truncate">{ticket.title}</CardTitle>
                </CardHeader>
                <CardContent><p className={clsx({ "line-clamp-3": !isDetail })}>{ticket.content}</p></CardContent>
            </Card>
            {!isDetail && (
                <div className="flex flex-col gap-2 px-2">
                    <Button asChild>
                        <Link href={`/tickets/${ticket.id}`} aria-label="View ticket">
                            View
                        </Link>
                    </Button>
                </div>
            )}

        </div>
    )
}

export default TicketItem;