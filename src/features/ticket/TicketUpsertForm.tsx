"use client";

import { Button } from "@/components/ui/button";
import { FieldGroup, Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma/client";
import { upsertTicketAction } from "./actions/upsertTicketAction";
import { useTransition } from "react";
import { LucideLoaderCircle } from "lucide-react";

export function TicketUpsertForm({ ticket }: { ticket?: Ticket }) {
    const [isPending, startTransition] = useTransition();

    const onSubmit = (formData: FormData) => {
        startTransition(async () => {
            await upsertTicketAction(formData);
        });
    }

    return (
        <form action={onSubmit}>
            <Input hidden defaultValue={ticket?.id || ""} type="text" name="id" id="id" />

            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="title">Title</FieldLabel>
                    <Input defaultValue={ticket?.title} type="text" name="title" id="title" />
                    <FieldDescription>The title of your ticket</FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="content">Content</FieldLabel>
                    <Textarea defaultValue={ticket?.content} id="content" name="content"></Textarea>
                </Field>
            </FieldGroup>

            <Button type="submit" className="mt-4 w-full" disabled={isPending}>
                {isPending && <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                {ticket ? "Update" : "Create"}
            </Button>
        </form>
    );
}