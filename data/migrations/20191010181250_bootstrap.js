exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("name", 255)
        .notNullable()
        .unique();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl.text("instructions");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("name", 255)
        .notNullable()
        .unique();
    })
    .createTable("quantities", tbl => {
      tbl.increments();
      tbl.string("unit", 255).notNullable();
      tbl.float("quantity", 2).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.unique(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("quantities")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
