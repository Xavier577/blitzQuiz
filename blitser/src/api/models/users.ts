import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

interface User {
  email: string;
  password: string;
  blitzId: string;
}

const UserSChema = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String },
  blitzId: { type: String, default: () => nanoid() },
});

// UserSChema.methods.generateBlitzCode = function() {

// }

export default model("user", UserSChema);
