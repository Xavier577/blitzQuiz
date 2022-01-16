import express from "express";
import cors from "cors";
import { corsOptions } from "./config/settings";
import indexRouter from "./routes";
import { connectDB } from "./config/db";

const app = express();
connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

export default app;
