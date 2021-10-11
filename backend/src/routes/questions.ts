import express from "express";

const questionRouter = express.Router();

// get questions

questionRouter.get("/", (_req, res) => {
  res.json([
    {
      id: 1,
      question: "who is the founder of blitzQuiz",
      options: {
        a: "Joseph Tsegen",
        b: "Elon Musk",
        c: "Ben Awad",
        d: "Bill gates",
      },
      answer: "Joseph Tsegen",
    },
  ]);
});

export default questionRouter;
