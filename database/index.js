const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repos_id: { type: String, unique: true },
  repos_full_name: String,
  repos_html_url: String,
  repos_description: String,
  repos_updated_at: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = () => {};

module.exports.save = save;
