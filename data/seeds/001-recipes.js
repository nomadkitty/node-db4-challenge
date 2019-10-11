exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    { name: "Deep Fried Chicken" },
    { name: "Mac and Cheese" },
    { name: "Tuna Fish Cake" },
  ]);
};
