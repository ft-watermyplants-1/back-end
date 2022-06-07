const router = require("express").Router();
const Users = require("./users-model");
const { checkUserExists } = require("./users-middleware");

router.get("/:user_id", checkUserExists, (req, res, next) => {
  Users.findById(req.decodedToken.subject)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.put("/:user_id", checkUserExists, (req, res, next) => {
  Users.update(req.decodedToken.subject, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.delete("/:user_id", checkUserExists, (req, res, next) => {
  Users.remove(req.decodedToken.subject)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

module.exports = router;
