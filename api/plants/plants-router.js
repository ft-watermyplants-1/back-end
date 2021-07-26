const router = require("express").Router();
const Plants = require("./plants-model");
const { checkUserExists } = require("../users/users-middleware");
const {
  checkPlantExists,
  validatePlantPayload,
} = require("./plants-middleware");

router.get("/:user_id/plants", checkUserExists, (req, res, next) => {
  Plants.findAll(req.params.user_id)
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch(next);
});

router.get(
  "/:user_id/plants/:plant_id",
  checkUserExists,
  checkPlantExists,
  (req, res, next) => {
    Plants.findById(req.params.user_id, req.params.plant_id)
      .then((plant) => {
        res.status(200).json(plant);
      })
      .catch(next);
  }
);

router.post(
  "/:user_id/plants",
  checkUserExists,
  validatePlantPayload,
  (req, res, next) => {
    Plants.add(req.params.user_id, req.body)
      .then((plant) => {
        res.status(201).json(plant);
      })
      .catch(next);
  }
);

router.put(
  "/:user_id/plants/:plant_id",
  checkUserExists,
  checkPlantExists,
  validatePlantPayload,
  (req, res, next) => {
    Plants.update(req.params.user_id, req.params.plant_id, req.body)
      .then((plant) => {
        res.status(200).json(plant);
      })
      .catch(next);
  }
);

router.delete(
  "/:user_id/plants/:plant_id",
  checkUserExists,
  checkPlantExists,
  (req, res, next) => {
    Plants.remove(req.params.plant_id)
      .then((plant) => {
        res.status(200).json(plant);
      })
      .catch(next);
  }
);

module.exports = router;
