const pool = require('../utils/pool.js');

module.exports = class Term {
  id;
  term;
  definition;
  example;

  constructor(row) {
    this.id = row.id;
    this.term = row.term;
    this.definition = row.definition;
    this.example = row.example;
  }

  static async insert({ term, definition, example }) {
    const { rows } = await pool.query(
      `INSERT INTO terms (term, definition, example)
      VALUES ($1, $2, $3)
      RETURNING *`,
      [term, definition, example]
    );
    return new Term(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM terms');
    return rows.map(row => new Term(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM terms WHERE id = $1', [id]);
    return new Term(rows[0]);
  }
};
