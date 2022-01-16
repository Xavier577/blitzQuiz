import express from "express";
import cors from "cors";
import helmet from "helmet";
import { corsOptions } from "./config/settings";
import indexRouter from "./routes";
import { connectDB } from "./config/db";

const app = express();
connectDB();

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", indexRouter);

export default app;
