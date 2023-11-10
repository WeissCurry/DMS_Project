/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex('Role').del()
  await knex('Role').insert([
    {
      Username: "Cahyadi",
      Password: "*******",
      Role: "Admin",
      id: 1,
    },
    {
      Username: "Ucup",
      Password: "*******",
      Role: "Admin",
      id: 2,
    },
    {
      Username: "Saiful",
      Password: "*******",
      Role: "Admin",
      id: 3,
    },
    {
      Username: "Sarah",
      Password: "*******",
      Role: "SuperAdmin",
      id:  4,
    },
    {
      Username: "Udin",
      Password: "*******",
      Role: "SuperAdmin",
      id:  5,
    },
  ]);
};

