const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function(req, res) {});

app.get('/repos', function(req, res) {});

const PORT = process.env.PORT || 1128;
app.listen(PORT, function() {
  console.log(`GitHub Fetcher is listening on ${PORT}`);
});
