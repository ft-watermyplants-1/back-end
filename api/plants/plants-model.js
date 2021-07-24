const db = require("../data/db-config");

function findAll(user_id) {
  return db("plants").where("user_id", user_id);
}

function findById(user_id, plant_id) {
  return db("plants").where("user_id", user_id).andWhere("plant_id", plant_id);
}

module.exports = { findAll, findById };
