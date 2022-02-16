const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("password", 8);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "test",
          last_name: "account",
          password: hash,
          email: "fake@email.com",
        },
      ]);
    });
};
