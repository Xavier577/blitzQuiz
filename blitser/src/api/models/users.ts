import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  blitzId: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSChema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  blitzId: { type: String, default: () => nanoid() },
  createdAt: { type: Date, default: () => new Date() },
  updatedAt: { type: Date, default: () => new Date() },
});

UserSChema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export default model("user", UserSChema);
