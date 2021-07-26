const db = require("../data/db-config");

function findAll() {
  return db("users")
    .select("user_id", "username", "phone_number")
    .orderBy("user_id", "asc");
}

async function findById(user_id) {
  const rows = await db("users as u")
    .join("plants as p", "u.user_id", "p.user_id")
    .where("u.user_id", user_id);

  const result = {
    user_id: rows[0].user_id,
    username: rows[0].username,
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

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [newUser] = await db("users").insert(user, [
    "user_id",
    "username",
    "phone_number",
  ]);
  return newUser;
}

async function update(user_id, user) {
  const [updatedUser] = await db("users")
    .update(user, ["user_id", "username", "phone_number"])
    .where("user_id", user_id);
  return updatedUser;
}

async function remove(user_id) {
  const [deletedUser] = await db("users")
    .del(["user_id", "username"])
    .where("user_id", user_id);
  return deletedUser;
}

module.exports = { findAll, findById, findBy, add, update, remove };
