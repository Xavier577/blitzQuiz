import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/users";

export default async function signUp(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec();
  let successMessage: string;
  let authenticatedUser: typeof user;

  if (user) {
    authenticatedUser = user;
    successMessage = "user already exists,so would login user instead";
  } else {
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ email: email, password: hash });
    const savedUser = await newUser.save();
    authenticatedUser = savedUser;
    successMessage = "successfully created and loggedin user";
  }

  req.login(authenticatedUser, (err) => {
    if (err) return res.sendStatus(500);
    return res.status(200).json({ successMessage });
  });
}
