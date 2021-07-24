exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("plants").insert([
        {
          nickname: "Bob",
          species: "Sunflower",
          days_between_watering: 1,
          notes: "Make sure to use clear water",
          user_id: 1,
        },
        {
          nickname: "Rufus",
          species: "Petunia",
          days_between_watering: 3,
          user_id: 1,
        },
        {
          nickname: "Jennifer",
          species: "Orchid",
          days_between_watering: 7,
          notes: "Try gatorade. It's got electrolytes.",
          user_id: 2,
        },
        {
          nickname: "Frederick",
          species: "Rose",
          days_between_watering: 1,
          user_id: 3,
        },
        {
          nickname: "Sam",
          species: "Petunia",
          days_between_watering: 2,
          user_id: 2,
        },
        {
          nickname: "Sally",
          species: "Carnation",
          days_between_watering: 2,
          user_id: 4,
        },
        {
          nickname: "Broomhilda",
          species: "Orchid",
          days_between_watering: 3,
          img_url:
            "https://fyf.tac-cdn.net/images/products/large/P-149.jpg?auto=webp&quality=60&width=690",
          user_id: 4,
        },
      ]);
    });
};
