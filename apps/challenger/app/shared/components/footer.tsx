import React from "react";
import { DISCORD_INVITATION_LINK } from "../consts";

export const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-background/70 w-full py-4 flex flex-col items-center justify-center gap-4 border border-transparent border-t-border max-h-16">
      <small className="font-semibold">
        Copyright &copy;
        <a
          target="_blank"
          href={DISCORD_INVITATION_LINK}
          className="ml-2 text-gradient-primary"
        >
          Chads programming
        </a>
      </small>
    </footer>
  );
};
