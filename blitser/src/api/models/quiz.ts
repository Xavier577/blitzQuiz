import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

interface Question {
  questionNumber: number;
  questionDetails: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: {
    option: string;
    value: string;
  };
}

interface Quiz {
  setBy: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  questions: [Question];
  quizId: string;
}

const QuestionSchema = new Schema<Question>({
  questionNumber: Number,
  questionDetails: String,
  options: {
    type: {
      a: String,
      b: String,
      c: String,
      d: String,
    },
  },
  correctAnswer: {
    type: {
      option: String,
      value: String,
    },
  },
});

const QuizSchema = new Schema<Quiz>({
  questions: [QuestionSchema],
  quizId: { type: String, default: () => nanoid(30) },
  setBy: { type: Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: () => new Date() },
  updatedAt: { type: Date, default: () => new Date() },
});

QuizSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export default model("quiz", QuizSchema);
