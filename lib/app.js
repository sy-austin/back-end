const express = require('express');
const termController = require('./controllers/terms.js');

const app = express();

app.use(express.json());

app.use(termController);
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
