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
          img_url:
            "https://fyf.tac-cdn.net/images/products/large/P-149.jpg?auto=webp&quality=60&width=690",
          user_id: 1,
        },
        {
          nickname: "Rufus",
          species: "Petunia",
          days_between_watering: 3,
          img_url:
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623959191-medium-plant-dieffenbachia-white-pot_2048x.jpg",
          user_id: 1,
        },
        {
          nickname: "Jennifer",
          species: "Orchid",
          days_between_watering: 7,
          notes: "Try gatorade. It's got electrolytes.",
          img_url:
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631219804-the-sill_calathea-ornata_small_hyde-cream_1440x.jpg",
          user_id: 1,
        },
        {
          nickname: "Frederick",
          species: "Rose",
          days_between_watering: 1,
          img_url:
            "https://media.glamour.com/photos/5ea89429e67f360008b064d8/master/w_1172,h_1412,c_limit/Pink%20Anthurium.png",
          user_id: 1,
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
          user_id: 2,
        },
        {
          nickname: "Broomhilda",
          species: "Orchid",
          days_between_watering: 3,
          img_url:
            "https://fyf.tac-cdn.net/images/products/large/P-149.jpg?auto=webp&quality=60&width=690",
          user_id: 2,
        },
      ]);
    });
};
