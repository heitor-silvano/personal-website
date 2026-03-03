import 'dotenv/config'
import type { Config } from "drizzle-kit"

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL not defined in .env file')
}

export default {
  schema: "./src/app/db/schema/**/*.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
} satisfies Config