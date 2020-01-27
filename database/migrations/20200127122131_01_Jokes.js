
exports.up = function(knex) {
  return knex.schema.createTable('jokes', jokes=>{
      jokes
      .increments()

      jokes
      .string('joke', 255)
      .notNullable()

      jokes
      .string('reply', 255)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('jokes')
};
