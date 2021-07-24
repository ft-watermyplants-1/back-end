const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res, next) => {
  Users.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Users.add(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

module.exports = router;
