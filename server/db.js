const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: PWORD,
    host: "localhost",
    port: 5432,
    database: "perntodo"
});