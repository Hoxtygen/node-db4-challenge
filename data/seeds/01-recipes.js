
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'custard'},
        {recipe_name: 'jollof rice'},
        {recipe_name: 'Beans'},
      ]);
    });
};
