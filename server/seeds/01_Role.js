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
      id: 1,
    },
    {
      Username: "Ucup",
      Password: "12345678",
      Role: "Admin",
      id: 2,
    },
    {
      Username: "Saiful",
      Password: "12345678",
      Role: "Admin",
      id: 3,
    },
    {
      Username: "Sarah",
      Password: "12345678",
      Role: "SuperAdmin",
      id:  4,
    },
    {
      Username: "Udin",
      Password: "12345678",
      Role: "SuperAdmin",
      id:  5,
    },
  ]);
};

