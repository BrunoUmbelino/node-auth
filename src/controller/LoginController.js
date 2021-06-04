const { auth } = require("../services/auth");
const { loginValidation } = require("../validations");

const login = async (request, response) => {
  const { email, password } = request.body;

  const { error } = loginValidation({ email, password });
  if (error) return response.status(400).send(error.details[0].message);

  try {
    const returnedData = await auth(email, password);
    const userData = {
      token: returnedData.token,
      username: returnedData.user.username,
    };
    return response.json(userData);
  } catch (err) {
    response.status(404).send("username or password is invalid");
  }
};

module.exports = { login };
