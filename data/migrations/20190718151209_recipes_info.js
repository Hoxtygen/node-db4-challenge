
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
      table.increments();

      table.string('recipe_name')
            .unique()
            .notNullable();
  })
  .createTable('ingredients', table => {
      table.increments();

    table.string('ingredient_name')
        .unique()
        .notNullable()
  })


  .createTable('steps', table => {
      table.increments();

      table.integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')

      table.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes');

    table.integer('step_number')
        .unsigned()
        .notNullable();
    
    table.float('ingredient_quantity')
        .notNullable();

    table.text('description')
        .notNullable();

  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps');
};
