const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});
module.exports = {
  emailSchema,
};
