exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps").insert([
    { recipe_id: 1, step_number: "1", instructions: "mix chicken with flour" },
    {
      recipe_id: 1,
      step_number: "2",
      instructions: "deep fry the marinated chicken",
    },
    { recipe_id: 2, step_number: "1", instructions: "boil noodle" },
    { recipe_id: 2, step_number: "2", instructions: "melt cheese" },
    { recipe_id: 2, step_number: "3", instructions: "mix noodle and cheese" },
    {
      recipe_id: 3,
      step_number: "1",
      instructions: "drain tuna fish from can",
    },
    { recipe_id: 3, step_number: "2", instructions: "cut bell pepper" },
    {
      recipe_id: 3,
      step_number: "3",
      instructions: "mix tuna fish with bell pepper",
    },
    {
      recipe_id: 3,
      step_number: "4",
      instructions: "pan fry the mixture on both side",
    },
  ]);
};
