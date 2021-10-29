import express from "express";
import mockQuestions from "../mock/questions";

const questionRouter = express.Router();

// get questions

questionRouter.get("/", (_req, res) => {
  res.json(mockQuestions);
});

export default questionRouter;
