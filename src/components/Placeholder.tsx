import { LucideMessageSquareWarning } from "lucide-react";

function Placeholder({ message, icon = <LucideMessageSquareWarning />, button = null }: { message: string, icon?: React.ReactElement, button?: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-1 self-center items-center justify-center gap-2">
            {icon}
            <h1 className="text-xl">{message}</h1>
            {button}
        </div>
    );
}

export default Placeholder;