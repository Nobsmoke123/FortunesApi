const express = require('express');
const bodyParser = require('body-parser');
const FortuneController = require('./controller/FortuneController');

const app = express();

// Allow us to parse JSON incoming requests
app.use(bodyParser.json());

app.get('/fortunes', FortuneController.getFortunes);

app.get('/fortune/:id', FortuneController.getFortune);

app.get('/fortunes/random', FortuneController.getRandomFortune);

app.post('/fortunes', FortuneController.addFortune);

app.put('/fortune/:id', FortuneController.updateFortune);

app.delete('/fortune/:id', FortuneController.deleteFortune);

module.exports = app;