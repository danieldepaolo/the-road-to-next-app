import Header from "@/components/Header";
import { Suspense } from "react";
import TicketList from "@/features/ticket/TicketList";
import Spinner from "@/components/Spinner";
import { ErrorBoundary } from "react-error-boundary";
import Placeholder from "@/components/Placeholder";
import { TicketUpsertForm } from "@/features/ticket/TicketUpsertForm";
import { CardCompact } from "@/components/CardCompact";

function TicketsPage() {
    return (
        <div className="flex flex-col gap-y-6">
            <Header title="Tickets" description="Your tickets are listed below." />
            <CardCompact
                title="Create Ticket"
                description="New ticket will be created."
                className="w-full max-w-lg self-center mb-8"
            >
                <TicketUpsertForm />
            </CardCompact>

            <ErrorBoundary fallback={<Placeholder message="Something went wrong!" />}>
                <Suspense fallback={<Spinner />}>
                    <TicketList />
                </Suspense>
            </ErrorBoundary>
        </div >
    );
}

export default TicketsPage;
