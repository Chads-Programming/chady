// tailwind config is required for editor support

import sharedConfig from '@repo/ui/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets' | 'darkMode'> = {
  content: ['./app/**/*.tsx', '../../packages/ui/src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  presets: [sharedConfig],
}

export default config
