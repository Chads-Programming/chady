"use client";

import React from "react";
import { useGetProfile } from "../queries/profile";

export const ProfileBanner = () => {
  const { data } = useGetProfile();

  return <div className="text-white">{data?.findProfile.username}</div>;
};
