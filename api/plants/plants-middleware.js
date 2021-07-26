const Plants = require("./plants-model");

async function checkPlantExists(req, res, next) {
  try {
    const existing = await Plants.findById(req.params.plant_id);
    if (!existing) {
      next({ status: 404, message: "No plant found with that ID." });
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
  } else if (!days_between_watering) {
    next({ status: 422, message: "Watering schedule required." });
  }
}

module.exports = {
  checkPlantExists,
};
