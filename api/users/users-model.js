const db = require("../data/db-config");

function findAll() {
  return db("users");
}

async function findById(id) {
  const rows = await db("users as u")
    .join("plants as p", "u.user_id", "p.user_id")
    .where("u.user_id", id);

  const result = {
    user_id: rows[0].user_id,
    username: rows[0].username,
    password: rows[0].password,
    phone_number: rows[0].phone_number,
    plants: [],
  };

  rows.forEach((row) => {
    result.plants.push({
      plant_id: row.plant_id,
      nickname: row.nickname,
      species: row.species,
      days_between_watering: row.days_between_watering,
      notes: row.notes,
      img_url: row.img_url,
    });
  });

  return result;
}

async function add(user) {
  const [newUser] = await db("users").insert(user, [
    "user_id",
    "username",
    "password",
    "phone_number",
  ]);
  return newUser;
}

function update(id) {}

function remove(id) {}

module.exports = { findAll, findById, add, update, remove };
