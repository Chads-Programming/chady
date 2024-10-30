import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_HOST: z.string(),
  NEXT_PUBLIC_HOST: z.string(),
})

export const ENVS = envSchema.parse({
  NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
  NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
})
