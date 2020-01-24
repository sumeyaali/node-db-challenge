
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {Name: "Portfolio", Description: 'Work portfolio to showcase skills and previous works.'},
        {Name: "Sprint Challenges", Description: 'Challenges to demonstrate ability in a given time'},
        {Name: "Random Project", Description: 'Doing/ showing something random'}
      ]);
    });
};
