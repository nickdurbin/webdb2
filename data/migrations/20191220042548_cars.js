
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments("id")

    table.string("VIN").notNull().unique()
    table.string("make").notNull()
    table.string("model").notNull()
    table.integer("mileage").notNull()
    table.string("trasmissionType")
    table.string("titleStatus")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};