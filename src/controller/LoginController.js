const axios = require("axios").default;
require("dotenv").config();

const login = (request, response) => {
  axios({
    method: "post",
    url: "https://auth.leadszapp.com/api/login",
    headers: {
      "X-FusionAuth-TenantId": process.env.FUSION_AUTH_TENANT_ID,
      Authorization: process.env.KEY_API,
      "Content-Type": "application/json",
    },
    data: {
      loginId: "bruno@leadszapp.com",
      password: "asdfg541@L",
      applicationId: process.env.APPLICATION_ID,
    },
  })
    .then((response) => {
      console.log("====================================");
      console.log(response.data);
      console.log("RESPOSTA: ", response.status, response.statusText);
      console.log("====================================");
    })
    .catch((err) => {
      console.log("====================================");
      console.log(
        "ERR",
        err.response,
        err.response.status,
        err.response.statusText
      );
      console.log("====================================");
    });
  return response.send("ok");
};

module.exports = { login };
