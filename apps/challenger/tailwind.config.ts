// tailwind config is required for editor support

import sharedConfig from '@repo/ui/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets' | 'darkMode' | 'theme'> = {
  content: ['./app/**/*.tsx', '../../packages/ui/src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
}

export default config
