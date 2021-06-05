const authLocalUser = require("../service/authLocalUser");
const { authFusionAPI } = require("../service/authFusionAPI");
const { loginDataValidation } = require("../dataValidations");

const login = async (request, response) => {
  const { email, password } = request.body;

  const { error } = loginDataValidation({ email, password });
  if (error) return response.status(400).send(error.details[0].message);

  try {
    const authLocal = await authLocalUser(email, password);
    if (!authLocal.error)
      return response.json({
        token: authLocal.token,
        username: authLocal.username,
      });

    const authFusion = await authFusionAPI(email, password);
    return response.json({
      token: authFusion.token,
      username: authFusion.user.email,
    });
  } catch (err) {
    console.log(err);
    response.status(400).send("Username or password is invalid.");
  }
};

module.exports = { login };
