import { Request, Response, NextFunction as Next } from "express";
import { ValidationError, ObjectSchema } from "joi";

export default function validateIncomingData(validationSchema: ObjectSchema) {
  return async (req: Request, res: Response, next: Next) => {
    try {
      await validationSchema.validateAsync(req.body);
      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        const message = err.details[0].message;
        res.status(400).send({ message });
      } else {
        console.error(err);
        res.sendStatus(500);
      }
    }
  };
}
