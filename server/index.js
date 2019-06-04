const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./helpers/github');

let app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function(req, res) {
  const user = req.body.user;
  helpers.getReposByUsername(user, (err, data) => {
    if (err) {
      throw err;
    } else {
      // post GitHub API data to database
      // console.log(data)
    }
  });
  res.sendStatus(201);
});

app.get('/repos', function(req, res) {});

const PORT = process.env.PORT || 1128;
app.listen(PORT, function() {
  console.log(`GitHub Fetcher is listening on ${PORT}`);
});
