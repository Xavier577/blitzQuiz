import { CorsOptions } from "cors";
import { SessionOptions } from "express-session";
import { RedisOptions } from "ioredis";

export interface BaseSettings {
  port: string | number;
  environment: string;
  variables: {
    [name: string]: string;
  };
}

export interface AdditionalSettings {
  cors?: CorsOptions;
  session?: SessionOptions;
  redis?: RedisOptions;
}

export interface DBConnectOptions {
  retries?: number;
  delay?: number;
}
