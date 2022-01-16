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
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  profileImg: String,
  googleId: {
    type: String,
    required: true,
  },
  quizHistory: {
    type: [quizRecord],
  },
});

export default model("user", User);
