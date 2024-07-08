import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/server/db/model.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'morganatest',
    ssl: false,
  },
  verbose: true,
  strict: true,
});
