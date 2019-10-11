exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("quantities").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1, unit: "lbs" },
    { recipe_id: 1, ingredient_id: 6, quantity: 1, unit: "cup" },
    { recipe_id: 2, ingredient_id: 2, quantity: 2, unit: "cups" },
    { recipe_id: 2, ingredient_id: 3, quantity: 0.5, unit: "lbs" },
    { recipe_id: 3, ingredient_id: 4, quantity: 8, unit: "oz" },
    { recipe_id: 3, ingredient_id: 5, quantity: 4, unit: "oz" },
  ]);
};
