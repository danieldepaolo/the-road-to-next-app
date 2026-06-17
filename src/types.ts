export interface Ticket {
    id: number;
    title: string;
    content: string;
    priority: "Low" | "Medium" | "High";
    status: "Open" | "Closed" | "In Progress";
}
