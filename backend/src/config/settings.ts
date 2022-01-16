import { CLIENT_URL } from "./secrets";
import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: CLIENT_URL,
  credentials: true,
  optionsSuccessStatus: 200,
};
