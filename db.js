// Database config file
// this file contains credentials for postgraseSQL

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  database: "cms"
 
});

module.exports = pool;