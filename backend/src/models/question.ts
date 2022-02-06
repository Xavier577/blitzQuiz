import { model, Schema } from "mongoose";

const QuestionSchema = new Schema({
  question: String,
  category: { type: String, enum: ["math", "logic", "verbal-reasoning"] },
  options: {
    a: String,
    b: String,
    c: String,
    d: String,
  },
});

export default model("question", QuestionSchema);
