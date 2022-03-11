import express from "express";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import { additionSettings } from "./config/settings";
import apiRoutes from "./api/routes";
import { internalErrorHandler } from "./api/middlewares/error-handler";

const app = express();

// middlewares
app.use(cors(additionSettings.cors));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session(additionSettings.session));
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", apiRoutes);
app.use(internalErrorHandler);

/* 

app -> 
   That users can set their own questions and set the correct answer  send to someone to answer and score them according to their anser

user -> set question -> generates a link to question -> person answering the question -> goes to question  -> marks accordingly -> sees scores

features
- Accounts -> login & signup so users can i have there independent sessions (use jwt tokens for simplicity)
- Create a quiz
- Generate question link (with link shorteners)
- Questions Record

*/

export default app;
