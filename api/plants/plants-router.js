const router = require("express").Router();
const Plants = require("./plants-model");

router.get("/:user_id/plants", (req, res, next) => {
  Plants.findAll(req.params.user_id)
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch(next);
});

router.get("/:user_id/plants/:plant_id", (req, res, next) => {
  Plants.findById(req.params.user_id, req.params.plant_id)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch(next);
});

module.exports = router;
