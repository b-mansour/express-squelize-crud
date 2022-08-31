const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const dbConfig = {
  host: process.env.HOST_NAME,
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  password: process.env.PASSWORD,
  dialect: process.env.DIALECT,

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
};

// const dbConfig = mysql.createConnection({
//   host: process.env.HOST_NAME,
//   database: process.env.DATABASE,
//   user: process.env.DATABASE_USER,
//   password: process.env.PASSWORD,
// });

// dbConfig.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(" MySql Connected Successfully");
//   }
// });

module.exports = dbConfig;
