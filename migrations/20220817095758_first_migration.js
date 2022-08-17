/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// skapar och definerar column-typer
exports.up = function (knex) {
  return knex.schema.createTable("people", (table) => {
    table.increments("id");
    table.string("name");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//droppar
exports.down = function (knex) {
  return knex.schema.dropTable("people");
};
