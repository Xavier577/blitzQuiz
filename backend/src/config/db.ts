import mongoose from "mongoose";
import { DATABASE_URL } from "./secrets";

export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("connected to mongo!");
  } catch (err) {
    console.error(err);
  }
};
