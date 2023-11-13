/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex('Role').del()
  await knex('Role').insert([
    {
      Username: "Cahyadi",
      Password: "12345678",
      Role: "Admin",
    },
    {
      Username: "Ucup",
      Password: "12345678",
      Role: "Admin",
    },
    {
      Username: "Saiful",
      Password: "12345678",
      Role: "Admin",
    },
    {
      Username: "Sarah",
      Password: "12345678",
      Role: "SuperAdmin",
    },
    {
      Username: "Udin",
      Password: "12345678",
      Role: "SuperAdmin",
    },
  ]);
};

