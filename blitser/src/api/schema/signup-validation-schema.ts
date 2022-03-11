import Joi from "joi";

const signUpValidationSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

  confirm_password: Joi.ref("password"),
});

export default signUpValidationSchema;
