const { Pool } = require('pg');

const db = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.DATABASE_URL,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

console.log(db);
module.exports = db;
