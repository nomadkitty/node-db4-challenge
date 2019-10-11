exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients").insert([
    { name: "Chicken" },
    { name: "Cheese" },
    { name: "Noodle" },
    { name: "Tuna Fish" },
    { name: "Bell Pepper" },
    { name: "Flour" },
  ]);
};
