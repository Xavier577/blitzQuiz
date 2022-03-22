import { Request, Response, NextFunction as Next } from "express";
import { RedisClient } from "../../config/settings";
import Quiz from "../models/quiz";
import AsyncHandler from "../../helpers/async-handler";

export default async function getQuiz(req: Request, res: Response, next: Next) {
  const { questionId } = req.params;

  const queries = {
    getQuizFromCache: async () => await RedisClient.get(questionId),
    getQuiz: async () => await Quiz.findOne({ questionId }).exec(),
  };

  const { resolution: questionCache, error: cacheError } = await AsyncHandler(
    queries.getQuizFromCache
  );

  if (!questionCache) {
    let { resolution: quiz, error } = await AsyncHandler(queries.getQuiz);
    error = new Error("simulated error");
    if (error) return next(error);
    if (!quiz) return res.status(403).send({ message: "Invalid url" });
    await RedisClient.set(questionId, JSON.stringify(quiz));
    return res.send(quiz);
  } else if (cacheError) console.error(cacheError);
  else res.send(JSON.parse(questionCache));
}
