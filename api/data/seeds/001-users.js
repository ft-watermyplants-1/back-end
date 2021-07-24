exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "jeff", password: "1234", phone_number: "555-837-2847" },
        { username: "troy", password: "foo", phone_number: "555-738-1198" },
        { username: "abed", password: "bar", phone_number: "555-166-2367" },
        { username: "brita", password: "baz", phone_number: "555-455-2801" },
      ]);
    });
};
