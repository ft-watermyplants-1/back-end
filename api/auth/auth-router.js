const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const tokenBuilder = require("./token-builder");

router.post("/register", (req, res, next) => {
  let user = req.body;
  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(user.password, rounds);
  user.password = hash;

  Users.add(user)
    .then((saved) => {
      res.status(201).json({ message: `Welcome ${saved.username}` });
    })
    .catch(next);
});

router.post("/login", (req, res, next) => {});
