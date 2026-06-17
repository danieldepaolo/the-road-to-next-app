import { Kanban } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import ThemeSwitcher from "./theme/ThemeSwitcher";

function AppBar() {
    return (
        <nav className="p-6 border-b">
            <ul className="flex gap-4 justify-between">
                <li className="mr-6">
                    <Button asChild variant="ghost" className="text-lg font-semibold">
                        <Link href="/">
                            <Kanban />
                            <h1 className="ml-2">TicketBounty</h1>
                        </Link></Button>
                </li>
                <div className="flex gap-2">
                    <ThemeSwitcher />
                    <li className="mr-6">
                        <Button asChild variant="outline"><Link href="/tickets">Tickets</Link></Button>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default AppBar;
