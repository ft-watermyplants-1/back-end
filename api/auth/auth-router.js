const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const tokenBuilder = require("./token-builder");
const {
  checkEmailUnique,
  checkEmailExists,
  validateCredentials,
} = require("./auth-middleware");

router.post(
  "/register",
  validateCredentials,
  checkEmailUnique,
  (req, res, next) => {
    let user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;

    Users.add(user)
      .then((newUser) => {
        res.status(201).json({
          message: `Account successfully created. Welcome ${newUser.first_name}!`,
          newUser: {
            user_id: newUser.user_id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
          },
        });
      })
      .catch(next);
  }
);

router.post(
  "/login",
  validateCredentials,
  checkEmailExists,
  (req, res, next) => {
    try {
      if (bcrypt.compareSync(req.body.password, req.validUser.password)) {
        const token = tokenBuilder(req.validUser);
        res.status(200).json({
          user_id: req.validUser.user_id,
          message: `Welcome back ${req.validUser.first_name}`,
          token,
        });
      } else {
        next({ status: 401, message: "Invalid credentials" });
      }
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
