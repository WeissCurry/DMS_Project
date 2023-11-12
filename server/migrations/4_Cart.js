/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Cart", (table) => {
        table.increments("id").primary().unsigned(); // untuk buat ID
        table.string("Tanggal_Beli").defaultTo(knex.fn.now());
        table.integer("Jumlah")
        table.integer("Total")
        table.integer("Obat_Dibeli").unsigned().references("id").inTable("Obat")
        table.integer("Pasien_Ygbeli").unsigned().references("Nomor_RM").inTable("Pasien")
    })}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Cart")
}
