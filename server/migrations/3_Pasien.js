/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Pasien", (table) => {
        table.increments("Nomor_RM").primary().unsigned(); // untuk buat ID
        table.string("Nama")
        table.string("TTL")
        table.integer("Nomer_Telefon")
        table.string("Jenis_Kelamin")
        table.string("Alamat_Lengkap")
        table.string("Diagnosis")
        table.integer("Obat_Diberikan").unsigned().references("id").inTable("Obat")
        table.integer("Dokter_Diagnosa").unsigned().references("id").inTable("Role")
    })}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Pasien')
}
