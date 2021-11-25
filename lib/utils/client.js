const dotenv = require('dotenv') ;
dotenv.config();

const pg = require('pg');
const Client = pg.Client;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});

client.connect().then(() => {
  const { database, host, port } = client;
  console.log(`Connected to pg database ${database} on ${host}:${port}`);
});

module.exports = client;
