const router = require("express").Router();
const Plants = require("./plants-model");
const {
  checkPlantExists,
  checkPlantNicknameUnique,
  validatePlantPayload,
} = require("./plants-middleware");

router.get("/", (req, res, next) => {
  Plants.findAll(res.locals.decodedToken.subject)
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch(next);
});

router.get("/:plant_id", checkPlantExists, (req, res, next) => {
  Plants.findById(res.locals.decodedToken.subject, req.params.plant_id)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch(next);
});

router.post(
  "/",
  validatePlantPayload,
  checkPlantNicknameUnique,
  (req, res, next) => {
    Plants.add(res.locals.decodedToken.subject, req.body)
      .then((plant) => {
        res.status(201).json(plant);
      })
      .catch(next);
  }
);

router.put(
  "/:plant_id",
  checkPlantExists,
  validatePlantPayload,
  (req, res, next) => {
    Plants.update(
      res.locals.decodedToken.subject,
      req.params.plant_id,
      req.body
    )
      .then((plant) => {
        res.status(200).json(plant);
      })
      .catch(next);
  }
);

router.delete("/:plant_id", checkPlantExists, (req, res, next) => {
  Plants.remove(req.params.plant_id)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch(next);
});

module.exports = router;
