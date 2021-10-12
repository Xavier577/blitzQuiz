import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE_URL } from "./config/secrets";
import questionRouter from "./routes/questions";

const app = express();

const PORT = process.env.PORT || 8080;
const hostname = "127.0.0.1";

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

try {
  mongoose.connect(DATABASE_URL);
  console.log("connected to mongoDB!");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use("/questions", questionRouter);

app.get("/", (_req, res) => {
  res.send("<h2>Let's code!</h2>");
});

app.listen(PORT as number, hostname, () =>
  console.log(`listening on http://${hostname}:${PORT}`)
);
