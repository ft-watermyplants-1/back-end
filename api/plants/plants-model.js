const db = require("../data/db-config");

function findAll(user_id) {
  return db("plants").where("user_id", user_id);
}

module.exports = { findAll };
