import { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CardCompactProps = {
    children: ReactNode;
    title: string;
    description: string;
    className?: string;
    footer?: ReactNode;
}

export function CardCompact({ children, title, description, className, footer }: CardCompactProps) {
    return (
        <Card className={cn("w-full max-w-lg self-center mb-8", className)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    );
}