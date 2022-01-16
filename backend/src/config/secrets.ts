import dotenv from "dotenv";

process.env.NODE_ENV !== "production" ? dotenv.config() : null;

export const DATABASE_URL = process.env.DATABASE_URL as string;
export const CLIENT_URL = process.env.CLIENT_URL as string;
