import { Separator } from "./ui/separator";

function Header({ title, description }: { title: string, description: string }) {
    return (
        <>
            <div className="px-8">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-gray-500 py-2">{description}</p>
            </div>
            <Separator />
        </>
    );
}

export default Header;