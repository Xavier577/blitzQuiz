import { Request, Response } from "express";
import Users from "../models/users";

export default async function updateUser(req: Request, res: Response) {
  /* 

updatable fields -> firstName,lastName,email, password
*/
  try {
    const fieldsToUpdate = { ...req.body };
    if (fieldsToUpdate) res.sendStatus(400);
    else {
      // @ts-ignore
      await Users.findByIdAndUpdate(req?.user?.id, {
        ...fieldsToUpdate,
      }).exec();
      res.status(200).send({ message: "successfully updated user" });
    }
  } catch (err) {
    console.error(err);
  }
}
