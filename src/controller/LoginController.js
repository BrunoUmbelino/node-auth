const axios = require("axios").default;
require("dotenv").config();

const login = async (request, response) => {
  const { email, password } = request.body;
  let data;

  if (!email || !password)
    return response.status(404).send("Failed to receive data");

  try {
    const response = await axios({
      method: "post",
      url: "https://auth.leadszapp.com/api/login",
      headers: {
        "X-FusionAuth-TenantId": process.env.FUSION_AUTH_TENANT_ID,
        Authorization: process.env.KEY_API,
        "Content-Type": "application/json",
      },
      data: {
        loginId: email,
        password: password,
        applicationId: process.env.APPLICATION_ID,
      },
    });
    console.log("====================================");
    console.log(response.status, response.statusText);
    console.log("====================================");
    data = response.data;
  } catch (err) {
    console.log("====================================");
    console.log(err.response.status, err.response.statusText);
    console.log("====================================");
  }

  if (!data) {
    return response.status(404).send("username or password is invalid");
  }

  return response.json({ token: data.token, username: data.user.username });
};

module.exports = { login };
