const client = require('../lib/utils/client.js');
const Terms = require('./Terms.js');

run(); 

async function run() {
  try {
    await Promise.all(
      Terms.map(term => {
        return client.query(`
                INSERT INTO terms (term, definition, example)
                VALUES ($1, $2, $3)
                RETURNING *;
            `, [term.term, term.definition, term.example]);
      })
    );
  } catch (error) {
    console.log(error);
  }

  finally {
    client.end();
  }
}
