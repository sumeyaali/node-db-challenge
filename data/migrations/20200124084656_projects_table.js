
exports.up = function(knex) {
  return knex.schema.createTable('Projects', tbl => {
      tbl.increments()
      tbl.string('Name')
      tbl.text('Description')
      tbl.boolean('Completed').default(false)
  })
    .createTable('Tasks', tbl => {
        tbl.increments()
        tbl.text('Description')
        tbl.integer('ProjectId')
        tbl.boolean('Completed').default(false)
    })
    .createTable('Resources', tbl => {
        tbl.increments()
        tbl.string('Name')
        tbl.text('Description')
    })

};

exports.down = function(knex) {
  return knex
  .dropTableIfExists('Projects')
  .dropTableIfExists('Tasks')
  .dropTableIfExists('Resources')

};
