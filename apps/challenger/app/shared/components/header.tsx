import React from "react";

const LOGIN_PATH = "http://localhost:3200/auth/discord/login";

export const Header = () => {
  return (
    <header className="w-full mx-auto p-2 box-border flex flex-row gap-2 justify-between items-center">
      <div className="font-medium text-3xl text-pretty text-primary italic">
        Challenger <span className="font-bold not-italic">Chad</span>
      </div>
      <ul className="list-none">
        <li className="bg-blue-950 text-white px-4 py-2 rounded-md">
          <a href={LOGIN_PATH}>Login</a>
        </li>
      </ul>
    </header>
  );
};
