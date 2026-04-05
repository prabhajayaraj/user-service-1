const mysql = require('mysql2');
require('dotenv').config();   // optional, but good practice

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,        // make sure this exists
  port: parseInt(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();   // now db has .query(), .getConnection(), etc.
