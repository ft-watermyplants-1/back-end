const router = require("express").Router();
const Plants = require("./plants-model");
const { checkUserExists } = require("../users/users-middleware");
const {
  checkPlantExists,
  validatePlantPayload,
} = require("./plants-middleware");

router.get("/", checkUserExists, (req, res, next) => {
  Plants.findAll(req.decodedToken.subject)
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch(next);
});

router.get(
  "/:plant_id",
  checkUserExists,
  checkPlantExists,
  (req, res, next) => {
    Plants.findById(req.decodedToken.subject, req.params.plant_id)
      .then((plant) => {
        res.status(200).json(plant);
      })
      .catch(next);
  }
);

router.post("/", checkUserExists, validatePlantPayload, (req, res, next) => {
  Plants.add(req.decodedToken.subject, req.body)
    .then((plant) => {
      res.status(201).json(plant);
    })
    .catch(next);
});

router.put(
  "/:plant_id",
  checkUserExists,
  checkPlantExists,
  validatePlantPayload,
  (req, res, next) => {
    Plants.update(req.decodedToken.subject, req.params.plant_id, req.body)
      .then((plant) => {
        res.status(200).json(plant);
      })
      .catch(next);
  }
);

router.delete(
  "/:plant_id",
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
