const Plants = require("./plants-model");

async function checkPlantExists(req, res, next) {
  try {
    const existing = await Plants.findById(
      req.locals.decodedToken.subject,
      req.params.plant_id
    );
    if (!existing) {
      next({ status: 404, message: "No plant found with that ID." });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}

async function checkPlantNicknameUnique(req, res, next) {
  try {
    const existing = await Plants.findBy(req.locals.decodedToken.subject, {
      nickname: req.body.nickname,
    }).first();
    if (existing) {
      next({ status: 422, message: "This nickname is taken already." });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}

function validatePlantPayload(req, res, next) {
  const { nickname, species, days_between_watering } = req.body;
  if (!nickname || nickname.trim() === 0 || !species || species.trim() === 0) {
    next({ status: 422, message: "Nickname and species required." });
  } else if (days_between_watering === undefined) {
    next({ status: 422, message: "Watering schedule required." });
  } else if (typeof days_between_watering !== "number") {
    next({ status: 422, message: "Days between watering must be a number" });
  } else if (days_between_watering < 1) {
    next({ status: 422, message: "Days between watering must be at least 1" });
  } else {
    req.body.nickname = nickname.trim();
    req.body.species = species.trim();
    next();
  }
}

module.exports = {
  checkPlantExists,
  checkPlantNicknameUnique,
  validatePlantPayload,
};
