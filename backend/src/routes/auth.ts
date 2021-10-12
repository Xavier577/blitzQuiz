import express from "express";

const authRouter = express.Router();

// authenticate users

authRouter.post("/login", (req) => {
  const { email, password } = req.body;

  if (email && password) {
  }
});

export default authRouter;
