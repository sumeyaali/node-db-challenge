
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {Name: "Conference Room", Description: 'A spacious room to hold meeting'},
        {Name: "Computer", Description: 'What you need to get your work done'},
        {Name: "Microphone", Description: 'Something a little extra'}
      ]);
    });
};
