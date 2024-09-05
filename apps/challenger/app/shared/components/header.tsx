import React from "react";
import Discord from "../icons/discord";

const LOGIN_PATH = "http://localhost:3200/auth/discord/login";

export const Header = () => {
  return (
    <header className="main-header fixed top-0 z-10 w-full mx-auto p-2 px-4 box-border flex flex-row gap-2 justify-between items-center">
      <div className="font-medium text-3xl text-pretty text-primary italic">
        Chady
      </div>
      <div className="list-none">
        <a
          href={LOGIN_PATH}
          className="hover:underline text-pretty text-secondary-foreground px-8 py-2 rounded-md inline-flex items-center gap-2"
        >
          <span className="text-sm">Continue</span> <Discord />
        </a>
      </div>
    </header>
  );
};
