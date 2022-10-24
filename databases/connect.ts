import { config } from 'dotenv-safe';
import postgres from 'postgres';

if (!process.env.FLY_IO) config();

declare module globalThis {
  let postgresClient: ReturnType<typeof postgres> | undefined;
}

function connectOnceToDatabase() {
  if (!globalThis.postgresClient) {
    globalThis.postgresClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return globalThis.postgresClient;
}

export const sql = connectOnceToDatabase();
