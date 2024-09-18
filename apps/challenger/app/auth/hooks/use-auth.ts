import { useEffect } from "react";
import { useGetProfile } from "../queries/profile";
import { authStore } from "../store/auth";

export const useAuth = () => {
  const { data, isLoading } = useGetProfile();
  const { setProfile, profile, clearProfile } = authStore();

  useEffect(() => {
    if (!data) {
      return;
    }

    setProfile(data.findProfile);
  }, [data]);

  const logout = () => {
    clearProfile();
  };

  return {
    profile,
    logout,
    isLoading,
  };
};
