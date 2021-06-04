const axios = require("axios").default;
require("dotenv").config();

const auth = async (email, password) => {
  try {
    const authData = await axios({
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
    return authData.data;
  } catch (err) {
    console.log("===============================");
    console.log(err.response.status, err.response.statusText);
    console.log("===============================");
    return;
  }
};

module.exports = { auth };
