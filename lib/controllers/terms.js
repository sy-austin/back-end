const { Router } = require('express');
const Terms = require('../models/terms');

export default Router()

  .post('/api/terms', async (req, res) => {
    try {
      const terms = await Terms.insert(req.body);
      res.send(term);
    } catch (err) {
      res.status(500).send({ error: 'something went wrong' });
    }
  })

  .get('/api/terms', async (req, res) => {
    try {
      const terms = await Terms.getAll();
      res.send(terms);
    } catch (err) {
      res.status(500).send({ error: 'something went wrong' });
    }
  })

  .get('/api/terms/:id', async (req, res) => {
    try {
      const term = await Terms.getById(req.params.id);
      res.send(term);
    } catch (err) {
      res.status(500).send({ error: 'something went wrong' });
    }
  });