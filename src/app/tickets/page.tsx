import Header from "@/components/Header";
import { Suspense } from "react";
import TicketList from "@/features/ticket/TicketList";
import Spinner from "@/components/Spinner";
import { ErrorBoundary } from "react-error-boundary";
import Placeholder from "@/components/Placeholder";

function TicketsPage() {
    return (
        <div className="flex flex-col">
            <Header title="Tickets" description="Your tickets are listed below." />
            <ErrorBoundary fallback={<Placeholder message="Something went wrong!" />}>
                <Suspense fallback={<Spinner />}>
                    <TicketList />
                </Suspense>
            </ErrorBoundary>
        </div >
    );
}

export default TicketsPage;
