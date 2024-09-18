"use client";

import React from "react";
import Discord from "../icons/discord";
import Image from "next/image";
import Link from "next/link";
import { ProfileBanner } from "@/app/auth/components/profile-banner";
import { useAuth } from "@/app/auth/hooks/use-auth";

const LOGIN_PATH = "http://localhost:3200/auth/discord/login";

export const Header = () => {
  const { profile } = useAuth();

  return (
    <header className="w-full">
      <nav className="bg-background flex flex-row gap-2 justify-between items-center h-14 px-8">
        <div className="flex gap-1 items-center text-sm font-medium ">
          <Link
            href="/"
            className="flex gap-1 items-center font-bold text-2xl text-pretty text-primary italic"
          >
            <Image
              src="/logos/cat-chad.png"
              width={30}
              height={20}
              alt="cat_chad"
            />
            <span className="text-gradient-primary">Chady</span>
          </Link>
          <Link
            className="ml-8 hover:text-foreground text-foreground/80 transition-colors"
            href="/challenges"
          >
            Explore
          </Link>
        </div>
        {profile ? (
          <ProfileBanner
            username={profile.username}
            avatarUrl={profile.avatarUrl}
            roles={profile.roles}
          />
        ) : (
          <a
            href={LOGIN_PATH}
            className="inline-flex gap-2 items-center text-sm font-medium hover:text-foreground text-foreground/80 transition-colors"
          >
            <Discord /> Login with Discord
          </a>
        )}
      </nav>
    </header>
  );
};
