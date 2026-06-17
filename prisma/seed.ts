import { PrismaClient } from "@/generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = process.env.DIRECT_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const tickets = [
    {
        "title": "The program is crashing",
        "content": "From DB: The program is crashing when I try to open it. I've tried restarting the program and my computer, but it's still crashing.",
        "priority": "HIGH" as const,
        "status": "OPEN" as const
    },
    {
        "title": "Saved work sometimes gets deleted",
        "content": "From DB: I lost my saved work. I was working on it for hours and then the program crashed.",
        "priority": "MEDIUM" as const,
        "status": "IN_PROGRESS" as const
    },
    {
        "title": "Misaligned text",
        "content": "From DB: The text is misaligned in the program. I've tried everything to fix it, but it's still misaligned.",
        "priority": "LOW" as const,
        "status": "CLOSED" as const
    }
];

async function main() {
    console.log("Seeding database...");

    await prisma.ticket.deleteMany();
    await prisma.ticket.createMany({
        data: tickets
    });

    console.log("Seeding complete.");
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});