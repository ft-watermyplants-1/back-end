const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res, next) => {
  Users.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

router.get("/:user_id", (req, res, next) => {
  Users.findById(req.params.user_id)
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

router.put("/:user_id", (req, res, next) => {
  Users.update(req.params.user_id, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.delete("/:user_id", (req, res, next) => {
  Users.remove(req.params.user_id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

module.exports = router;
