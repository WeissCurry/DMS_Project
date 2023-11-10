/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Role", (table) => {
        table.increments("id").primary().unsigned(); // untuk buat ID
        table.string("Username")
        table.string("Password")
        table.string("Role")
    })}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Role")
}
