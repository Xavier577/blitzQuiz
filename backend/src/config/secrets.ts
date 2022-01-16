import dotenv from "dotenv";

process.env.NODE_ENV !== "production" ? dotenv.config() : null;

export const DATABASE_URL = process.env.DATABASE_URL || "";
export const CLIENT_URL = process.env.CLIENT_URL || "";
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
