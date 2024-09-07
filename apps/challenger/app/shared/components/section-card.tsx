import { cn } from "@repo/ui";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const SectionCard = ({ children, className }: Props) => {
  return (
    <section className={cn("rounded-md bg-secondary shadow-md p-2", className)}>
      {children}
    </section>
  );
};
