import { Separator } from "./ui/separator";

function Header({ title, description }: { title: string, description: string }) {
    return (
        <div>
            <div className="px-8 pb-4">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-gray-500">{description}</p>
            </div>
            <Separator />
        </div>
    );
}

export default Header;