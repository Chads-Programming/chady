import { cn } from "@repo/ui";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const SectionCard = ({ children, className }: Props) => {
  return (
    <section
      className={cn(
        "rounded-md bg-primary dark:bg-gray-800 shadow-md p-2",
        className
      )}
    >
      {children}
    </section>
  );
};
