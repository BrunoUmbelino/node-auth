const Joi = require("@hapi/joi");

const loginDataValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(18).required(),
  });
  return schema.validate(data);
};

const userValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(18).required(),
  });
  return schema.validate(data);
};

module.exports = { loginDataValidation, userValidation };
