const db = require("../data/db-config");

function findAll(user_id) {
  return db("plants").where("user_id", user_id);
}

function findById(user_id, plant_id) {
  return db("plants")
    .where("user_id", user_id)
    .andWhere("plant_id", plant_id)
    .first();
}

function findBy(user_id, filter) {
  return db("plants").where("user_id", user_id).andWhere(filter);
}

async function add(user_id, plant) {
  const [newPlant] = await db("plants").insert(
    {
      user_id: user_id,
      nickname: plant.nickname,
      species: plant.species,
      days_between_watering: plant.days_between_watering,
      notes: plant.notes,
      img_url: plant.img_url,
    },
    [
      "plant_id",
      "nickname",
      "species",
      "days_between_watering",
      "notes",
      "img_url",
      "user_id",
    ]
  );
  return newPlant;
}

async function update(user_id, plant_id, plant) {
  const [updatedPlant] = await db("plants")
    .update(
      {
        user_id: user_id,
        nickname: plant.nickname,
        species: plant.species,
        days_between_watering: plant.days_between_watering,
        notes: plant.notes,
        img_url: plant.img_url,
      },
      [
        "plant_id",
        "nickname",
        "species",
        "days_between_watering",
        "notes",
        "img_url",
        "user_id",
      ]
    )
    .where("plant_id", plant_id);
  return updatedPlant;
}

async function remove(plant_id) {
  const [removedPlant] = await db("plants")
    .del(["plant_id", "nickname", "species", "user_id"])
    .where("plant_id", plant_id);
  return removedPlant;
}

module.exports = { findAll, findById, findBy, add, update, remove };
