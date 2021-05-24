const axios = require("axios").default;
require("dotenv").config();

const login = (request, response) => {
  axios({
    method: "post",
    url: "",
    headers: {
      request: {},
    },
    data: {
      loginId: "bruno@leadszapp.com",
      password: "asdfg541@L",
      applicationId: "",
    },
  })
    .then((response) => {
      console.log("====================================");
      console.log("RESPOSTA: ", response);
      console.log("====================================");
    })
    .catch((err) => {
      console.log("====================================");
      console.log("COOL", err.response.status);
      console.log("====================================");
    });
  return response.send("ok");
};

module.exports = { login };

/// https://auth.leadszapp.com

// await axios({
//   method: "post",
//   url: "https://auth.leadszapp.com",
// })
//   .then((response) => {
//     console.log("oi");
//   })
//   .catch((err) => {
//     console.log("====================================");
//     console.log(err.response.status);
//     console.log("====================================");
//   });
