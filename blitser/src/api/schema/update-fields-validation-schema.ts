import Joi from "joi";

const userUpdateFieldValidator = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

export default userUpdateFieldValidator;
