const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets/index");
const Users = require("../users/users-model");

async function checkEmailUnique(req, res, next) {
  try {
    const existing = await Users.findBy({
      email: req.body.email,
    }).first();
    if (existing) {
      next({
        status: 422,
        message: "This email address has been used already.",
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}

async function validateCredentials(req, res, next) {
  const { first_name, last_name, email, password } = req.body;
  if (
    !first_name ||
    first_name.trim() === "" ||
    !last_name ||
    last_name.trim() === "" ||
    !email ||
    email.trim() === "" ||
    !password ||
    password.trim() === ""
  ) {
    next({ status: 422, message: "Name, email, and password required." });
  } else if (password.trim().length < 6 || password.trim().length > 30) {
    next({
      status: 422,
      message: "Password must be between 6 and 30 characters.",
    });
  } else {
    req.body.first_name = first_name.trim();
    req.body.last_name = last_name.trim();
    req.body.email = email.trim();
    req.body.password = password.trim();
    next();
  }
}

async function checkEmailExists(req, res, next) {
  try {
    const existing = await Users.findBy({
      email: req.body.email,
    }).first();
    if (!existing) {
      next({ status: 404, message: "User not found." });
    } else {
      req.validUser = existing;
      next();
    }
  } catch (err) {
    next(err);
  }
}

function restricted(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return next({ status: 401, message: "Token required." });
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return next({ status: 401, message: "Invalid token." });
    }
    res.locals.decodedToken = decodedToken;
    next();
  });
}

module.exports = {
  validateCredentials,
  checkEmailExists,
  checkEmailUnique,
  restricted,
};
