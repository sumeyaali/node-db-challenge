
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {ProjectId: 1, Description: 'Update portfolio regularly.'},
        {ProjectId: 2, Description: 'Get this sprint done ASAP.'},
        {ProjectId: 3, Description: 'Get whatever random is done.'}
      ]);
    });
};
