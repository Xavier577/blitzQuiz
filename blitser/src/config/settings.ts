import dotenv from "dotenv";
import path from "path";
import { CorsOptions } from "cors";
import session, { SessionOptions } from "express-session";
import Redis, { RedisOptions } from "ioredis";
import ConnectRedis from "connect-redis";

const envFilePath = path.join(__dirname, "..", "..", ".env"); //path to env file

process.env.NODE_ENV !== "production" && dotenv.config({ path: envFilePath });

interface BaseSettings {
  port: string;
  environment: string;
  variables: {
    [name: string]: string;
  };
}

interface AdditionalSettings {
  cors?: CorsOptions;
  session?: SessionOptions;
  redis?: RedisOptions;
}

export const RedisStore = ConnectRedis(session);
export const RedisClient = new Redis();

export const IN_PROD = process.env.NODE_ENV === "production";
const HALF_HOUR = 1000 * 60 * 30;
const SESSION_IDLE_TIMEOUT = HALF_HOUR;

export const baseSettings: BaseSettings = {
  port: process.env.PORT as string,
  environment: process.env.NODE_ENV as string,
  variables: {
    DATABASE_URL: process.env.DATABASE_URL as string,
    SESSION_SECRET: process.env.SESSION_SECRET as string,
    CLIENT_URL: process.env.CLIENT_URL as string,
  },
};

export const additionSettings: AdditionalSettings = {
  cors: {
    origin: baseSettings.variables.CLIENT_URL,
  },
  session: {
    name: "blitser_session",
    secret: baseSettings.variables.SESSION_SECRET,
    resave: false, // whether to save the session if it wasn't modified during the request
    saveUninitialized: false, // whether to save empty session
    store: new RedisStore({ client: RedisClient }),
    cookie: {
      secure: IN_PROD,
      maxAge: SESSION_IDLE_TIMEOUT,
    },
  },
};
