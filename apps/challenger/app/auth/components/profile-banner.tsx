"use client";

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
} from "@repo/ui";
import { Role } from "./role";
import { useAuth } from "../hooks/use-auth";
import Discord from "@/app/shared/icons/discord";
import { ChevronRight, LogOut } from "lucide-react";

const LOGIN_PATH = "http://localhost:3200/auth/discord/login";

export const ProfileBanner = () => {
  const { profile, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="inline-flex gap-2 justify-start items-center">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-12 w-[100px] rounded-md" />
      </div>
    );
  }

  if (!profile) {
    return (
      <a
        href={LOGIN_PATH}
        className="group px-2 rounded-md border border-border inline-flex gap-1 items-center text-sm font-medium hover:text-foreground text-foreground/80 transition-colors"
      >
        <Discord className="w-5 h-5" /> Login with Discord
        <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100  group-hover:translate-x-2 transition-all ease-in duration-200" />
      </a>
    );
  }

  return (
    <Popover>
      <PopoverTrigger className="inline-flex gap-2 justify-start items-center">
        <Avatar>
          <AvatarImage src={profile.avatarUrl} alt={profile.username} />
          <AvatarFallback>{profile.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-start">
          <p className="text-sm font-semibold">{profile.username}</p>
          <Button
            role="button"
            variant="ghost"
            onClick={logout}
            className="text-xs py-0 px-2 h-auto rounded-md inline-flex gap-1 items-center font-medium hover:text-foreground text-foreground/80 transition-colors"
          >
            <LogOut className="w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 w-80">
        <h3 className="text-sm font-semibold text-pretty">Discord badges:</h3>

        <ul className="inline-flex flex-wrap gap-2">
          {profile.roles.map(({ id, color, imageUrl, name }) => (
            <Role key={id} color={color} imageUrl={imageUrl} name={name} />
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
