const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");

router.post("/", (req, res, next) => {
  Users.add(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});
