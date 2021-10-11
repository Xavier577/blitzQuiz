import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export const DATABASE_URL = process.env.DATABASE_URL as string;
