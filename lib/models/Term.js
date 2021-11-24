const pool = require('../utils/pool.js');

export default class Term {
  id;
  term;
  definition;

  constructor(row) {
    this.id = row.id;
    this.term = row.term;
    this.definition = row.definition;
  }

  static async insert({ term, definition }) {
    const { rows } = await pool.query(
      `INSERT INTO terms (term, definition)
      VALUES ($1, $2)
      RETURNING *`,
      [term, definition]
    );
    return new Term(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(`SELECT * FROM terms`);
    return rows.map(row => new Term(row));
  };

  static async getById(id) {
    const { rows } = await pool.query(`SELECT * FROM terms WHERE id = $1`, [id]);
    return new Term(rows[0]);
  };
}