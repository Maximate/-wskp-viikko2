'use strict';
const express = require('express');
const app = express();
const port = 3000;
var cats = require('./routes/catRouter.js');

app.get('/', (req, res) => {
  res.send('Home');
});

app.post('/', function (req, res) {
  res.send('With this endpoint you can add cats.')
});

app.put('/', function (req, res) {
  res.send('With this endpoint you can edit cats.')
});

app.delete('/', function (req, res) {
  res.send('With this endpoint you can delete cats.')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/cat/:id', (req, res) => {
  res.send('You reqested a cat whose id is' + req.params);
});

app.use('/cats', cats);