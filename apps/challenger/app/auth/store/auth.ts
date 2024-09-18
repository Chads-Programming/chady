import { ProfileQuery } from "@/graphql/graphql";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AutState {
  profile?: ProfileQuery["findProfile"];

  clearProfile(): void;
  setProfile(profile: ProfileQuery["findProfile"]): void;
}

export const authStore = create<AutState>()(
  devtools(
    (setStore) => ({
      clearProfile: () => {
        setStore(() => {
          return {
            profile: undefined,
          };
        });
      },
      setProfile: (payload) => {
        setStore((state) => {
          return {
            ...state,
            profile: payload,
          };
        });
      },
    }),
    { name: "auth-storage" }
  )
);
