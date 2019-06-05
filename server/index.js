const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./helpers/github');
const db = require('../database/index');

let app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', (req, res) => {
  const user = req.body.user;
  helpers.getReposByUsername(user, (err, data) => {
    if (err) {
      throw err;
    } else {
      db.save(data);
      res.sendStatus(201);
    }
  });
});

app.get('/repos', (req, res) => {
  db.get((err, data) => {
    if (err) {
      throw err;
    } else {
      res.sendStatus(200);
    }
  });
});

const PORT = process.env.PORT || 1128;
app.listen(PORT, () => {
  console.log(`GitHub Fetcher is listening on ${PORT}`);
});
