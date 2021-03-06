const db = require("../data/db-config");

function findAll() {
  return db("users")
    .select("user_id", "email", "first_name", "last_name")
    .orderBy("user_id", "asc");
}

async function findById(user_id) {
  const rows = await db("users as u")
    .join("plants as p", "u.user_id", "p.user_id")
    .where("u.user_id", user_id);

  if (rows.length === 0) {
    return undefined;
  }

  const result = {
    user_id: rows[0].user_id,
    first_name: rows[0].first_name,
    last_name: rows[0].last_name,
    email: rows[0].email,
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
    "email",
    "first_name",
    "last_name",
  ]);
  return newUser;
}

async function update(user_id, user) {
  const [updatedUser] = await db("users")
    .update(user, ["user_id", "email", "first_name", "last_name"])
    .where("user_id", user_id);
  return updatedUser;
}

async function remove(user_id) {
  const [deletedUser] = await db("users")
    .del(["user_id", "email"])
    .where("user_id", user_id);
  return deletedUser;
}

module.exports = { findAll, findById, findBy, add, update, remove };
