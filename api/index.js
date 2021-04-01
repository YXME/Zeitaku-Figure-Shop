const express = require('express');
const path = require('path');

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const db = require('./queries')

app.use(express.static(path.join(__dirname, '../front')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../front/public/index.html'));
});

app.post('/api/login', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.post('/api/register', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

