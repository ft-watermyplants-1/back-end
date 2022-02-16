const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets/index");

module.exports = function (user) {
  const payload = {
    subject: user.user_id,
    first_name: user.first_name,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, JWT_SECRET, options);
};
