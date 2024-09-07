// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/ui/tailwind.config";

const config: Pick<Config, "content" | "presets" | "darkMode"> = {
  content: ["./app/**/*.tsx", "../../packages/ui/src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  presets: [sharedConfig],
};

export default config;
