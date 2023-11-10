module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432, // Sesuaikan dengan port PostgreSQL Anda
      user: 'postgres', // Sesuaikan dengan username PostgreSQL Anda
      password: 'postgres', // Sesuaikan dengan password PostgreSQL Anda
      database: 'APOTEK',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "migrations",
      tableName: "migrations"
    },
  },
};
