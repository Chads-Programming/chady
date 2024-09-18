"use client";

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui";
import { Role } from "./role";

interface Props {
  username: string;
  avatarUrl: string;
  roles: { id: string; name: string; imageUrl: string; color: number }[];
}

export const ProfileBanner = ({ username, avatarUrl, roles }: Props) => {
  return (
    <Popover>
      <PopoverTrigger className="inline-flex gap-2 justify-start items-center">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={username} />
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium">{username}</p>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 w-80">
        <h3 className="text-sm font-semibold text-pretty">Discord roles:</h3>

        <ul className="inline-flex flex-wrap gap-2">
          {roles.map(({ id, color, imageUrl, name }) => (
            <Role key={id} color={color} imageUrl={imageUrl} name={name} />
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
