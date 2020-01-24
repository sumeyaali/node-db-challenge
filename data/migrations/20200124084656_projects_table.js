
exports.up = function(knex) {
  return knex.schema.createTable('Projects', tbl => {
      tbl.increments()
      tbl.integer('ProjectId')
      tbl.string('Name')
      tbl.text('Description')
      tbl.boolean('Completed').default(false)
  })
    .createTable('Tasks', tbl => {
        tbl.increments()
        tbl.integer('TaskId')
        tbl.text('Description')
        tbl.integer('ProjectId')
        tbl.boolean('Completed').default(false)
    })
    .createTable('Resources', tbl => {
        tbl.increments()
        tbl.integer('ResourceId')
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
