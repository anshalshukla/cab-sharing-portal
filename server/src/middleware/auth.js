const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "abcd1234");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    req.authenticated = true;
    next();
  } catch (e) {
    req.user = null;
    req.authenticated = false;
    console.log("Unauthenticated Request");
    next();
  }
};

module.exports = auth;