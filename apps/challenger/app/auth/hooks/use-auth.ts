"use client";

import { useEffect } from "react";
import { useGetProfile } from "../queries/profile";
import { authStore } from "../store/auth";
import { LOGOUT_PATH } from "../consts";

export const useAuth = () => {
  const { data, isLoading, error } = useGetProfile();
  const { setProfile, profile, clearProfile } = authStore();

  useEffect(() => {
    if (error && !isLoading) {
      logout();
    }
  }, [error]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setProfile(data.findProfile);
  }, [data]);

  const logout = () => {
    clearProfile();
    window.location.href = LOGOUT_PATH;
  };

  return {
    profile,
    logout,
    isLoading,
  };
};
