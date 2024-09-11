import React from "react";
import Discord from "../icons/discord";
import Image from "next/image";
import Link from "next/link";

const LOGIN_PATH = "http://localhost:3200/auth/discord/login";

export const Header = () => {
  return (
    <header className="bg-background w-full mx-auto p-2 px-4 box-border flex flex-row gap-2 justify-between items-center">
      <Link href="/" className="inline-flex items-center font-bold text-3xl text-pretty text-primary italic">
        <Image
          src="/logos/cat-chad.png"
          width={30}
          height={20}
          alt="cat_chad"
        />
        <span className="ml-2">Chady</span>
      </Link>
        <a
            href={LOGIN_PATH}
            className="transition-all ease-in hover:underline text-pretty text-secondary-foreground px-8 py-2 rounded-md inline-flex items-center gap-2"
        >
            <span className="text-sm">Login with Discord</span> <Discord/>
        </a>
    </header>
  );
};
