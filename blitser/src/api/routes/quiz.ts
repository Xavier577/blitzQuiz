import { Router } from "express";
import getQuiz from "../controllers/get-quiz";
import authenticate from "../middlewares/authenticate";

const quizRouter = Router();

quizRouter.get("/:questionId", authenticate, getQuiz);

export default quizRouter;

/* 
/ get_quiz
/ create_quiz
/ update_quiz
/ delete_quiz
/ submit_quiz
*/
