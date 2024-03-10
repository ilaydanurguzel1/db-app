const {Client} = require('pg');

const connection = new Client({
  // connectionLimit: 100,
  // host: "mysql_db",
  // user: "user",
  // port: "3306",
  // password: "password",
  // database: "app",

  user: 'postgres',
  host: 'localhost',
  database: 'postgre_db',
  password: 'postgres',
  port: 5432
});

module.exports = connection;
