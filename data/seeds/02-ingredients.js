
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'custard powder'},
        {ingredient_name: 'rice'},
        {ingredient_name: 'beans'},
        {ingredient_name: 'groundnut oil'},
        {ingredient_name: 'red oil'},
        {ingredient_name: 'maggi'}
      ]);
    });
};
