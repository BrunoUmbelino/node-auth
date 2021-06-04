const { userValidation } = require("../validations");
const bcryptjs = require("bcryptjs");
const User = require("../model/User");

const register = async (request, response) => {
  const { email, password } = request.body;

  const { error } = userValidation({ email, password });
  if (error) return response.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: email });
  if (emailExist)
    return response.status(400).send("This e-mail already exists");

  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash(password, salt);

  const user = new User({
    email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    response.send({ message: `user (${savedUser._id}) saved successfully` });
  } catch (error) {
    response.status(400).send(error);
  }
};

module.exports = { register };
