import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z
    .string()
    .default('true')
    .transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)