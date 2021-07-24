const router = require("express").Router();
const Plants = require("./plants-model");

router.get("/:user_id/plants", (req, res, next) => {
  Plants.findAll(req.params.user_id)
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch(next);
});

module.exports = router;
