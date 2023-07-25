const pgp = require("pg-promise")();

const connection = {
  host: "localhost",
  port: 5432,
  database: "social_media",
  user: "arch",
  password: "pp",
};

export const db = pgp(connection);
