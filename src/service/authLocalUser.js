const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const authLocalUser = async (email, password) => {
  try {
    const userLocal = await User.findOne({ email: email });
    if (!userLocal) throw new Error(`"User not found in database.`);

    const validPass = await bcrypt.compare(password, userLocal.password);
    if (!validPass) throw new Error(`Password does not match.`);

    const token = await jwt.sign(
      { id: userLocal._id },
      process.env.TOKEN_SECRET
    );
    return { token: token, username: userLocal.email };
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};

module.exports = authLocalUser;
