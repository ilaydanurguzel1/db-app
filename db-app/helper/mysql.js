const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "kelebeK99",
  database: "example_app",
});

module.exports = connection;
