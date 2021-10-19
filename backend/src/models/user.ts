import { model, Schema } from "mongoose";

const quizRecord = new Schema({
  date: {
    type: Date,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

const User = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  quizHistory: {
    type: [quizRecord],
  },
});

export default model("user", User);
