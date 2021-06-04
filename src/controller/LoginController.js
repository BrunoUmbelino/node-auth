const { auth } = require("../service/auth");
const { loginValidation } = require("../validations");

const login = async (request, response) => {
  const { email, password } = request.body;

  const { error } = loginValidation({ email, password });
  if (error) return response.status(400).send(error.details[0].message);

  try {
    const authData = await auth(email, password);
    const userAuthorization = {
      token: authData.token,
      username: authData.user.username,
    };
    return response.json(userAuthorization);
  } catch (err) {
    response.status(404).send("username or password is invalid");
  }
};

module.exports = { login };
