const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes as r")
    .where("r.id", "=", recipe_id)
    .join("quantities as q", "r.id", "=", "q.recipe_id")
    .join("ingredients as i", "q.ingredient_id", "=", "i.id")
    .select(
      "r.name as recipe_name",
      "i.name as ingredient_name",
      "q.quantity",
      "q.unit",
    );
}

function getInstructions(recipe_id) {
  return db("recipes as r")
    .where("r.id", recipe_id)
    .join("steps as s", "r.id", "s.recipe_id")
    .select("r.name", "s.step_number", "s.instructions");
}
