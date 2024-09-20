import 'dotenv/config';
import z from 'zod';

const PortSchema = z
  .string()
  .refine(
    (port) => parseInt(port) > 0 && parseInt(port) < 65536,
    'Invalid port number',
  );

const envSchema = z.object({
  PORT: PortSchema,
  DATABASE_URL: z.string().url(),
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  DISCORD_CALLBACK_URL: z.string(),
  AUTH_REDIRECT_URL: z.string().url(),
  COOKIE_SECRET: z.string(),
  DISCORD_SERVER_ID: z.string(),
  DISCORD_API_KEY: z.string(),
  CODE_RUNNER_API_HOST: z.string().url(),
  CODE_RUNNER_API_KEY: z.string(),
  JWT_ACCESS_SECRET: z.string(),
  JWT_ACCESS_EXPIRATION: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_REFRESH_EXPIRATION: z.string(),
  ALLOWED_ORIGIN_HOSTS: z.string(),
});

export type EnvVars = z.infer<typeof envSchema>;

const { error, data } = envSchema.safeParse(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = data;

export const envs = {
  PORT: envVars.PORT,
  DATABASE_URL: envVars.DATABASE_URL,
  DISCORD_CLIENT_ID: envVars.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: envVars.DISCORD_CLIENT_SECRET,
  DISCORD_CALLBACK_URL: envVars.DISCORD_CALLBACK_URL,
  AUTH_REDIRECT_URL: envVars.AUTH_REDIRECT_URL,
  COOKIE_SECRET: envVars.COOKIE_SECRET,
  DISCORD_SERVER_ID: envVars.DISCORD_SERVER_ID,
  DISCORD_API_KEY: envVars.DISCORD_API_KEY,
  CODE_RUNNER_API_HOST: envVars.CODE_RUNNER_API_HOST,
  CODE_RUNNER_API_KEY: envVars.CODE_RUNNER_API_KEY,
  JWT_ACCESS_SECRET: envVars.JWT_ACCESS_SECRET,
  JWT_ACCESS_EXPIRATION: envVars.JWT_ACCESS_EXPIRATION,
  JWT_REFRESH_SECRET: envVars.JWT_REFRESH_SECRET,
  JWT_REFRESH_EXPIRATION: envVars.JWT_REFRESH_EXPIRATION,
  ALLOWED_ORIGIN_HOSTS: envVars.ALLOWED_ORIGIN_HOSTS,
} as EnvVars;
