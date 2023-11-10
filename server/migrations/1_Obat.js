/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Obat", (table) => {
        table.increments("id").primary().unsigned(); // untuk buat ID
        table.string("Nama")
        table.integer("Harga")
        table.integer("Stock")
        table.text("Komposisi")
        table.text("Dosis")
        table.text("Aturan_Pakai")
        table.string("Jenis_Obat")
        table.text("Gambar")//isinya Link
    })}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Obat")
}
