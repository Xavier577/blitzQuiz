import { model, Schema } from "mongoose";

const AnswerSchema = new Schema({
  option: String,
  value: String,
  question: {
    type: Schema.Types.ObjectId,
    ref: "question",
  },
});

export default model("answer", AnswerSchema);
