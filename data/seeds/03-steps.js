
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {ingredient_id: 1, recipe_id: 1, step_number: 1, ingredient_quantity: 3, description: 'spoonfuls'},
        {ingredient_id: 2, recipe_id: 1, step_number: 2, ingredient_quantity: 2, description: 'cups'},
        {ingredient_id: 3, recipe_id: 1, step_number: 3, ingredient_quantity: 3, description: 'buckets'}
      ]);
    });
};
