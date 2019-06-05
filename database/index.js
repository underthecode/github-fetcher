const mongoose = require('mongoose');
const keys = require('../server/config/keys');

mongoose
  .connect(keys.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log(`GitHub Fetcher is connected to database`),
      err => {
        if (err) {
          throw err;
        }
      };
  });

let repoSchema = new mongoose.Schema({
  repo_user: String,
  repo_user_url: String,
  repo_id: { type: Number, unique: true, required: true },
  repo_name: String,
  repo_html_url: String,
  repo_description: String,
  repo_stargazers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = data => {
  // console.log(data);
  // `data` is an array of objects
  // each elelment in array is a `repo`

  // iterate over each `repo`
  // construct a document for each `repo`
  data.forEach(repo => {
    const addRepo = new Repo({
      repo_user: repo.owner.login,
      repo_user_url: repo.owner.html_url,
      repo_id: repo.id,
      repo_name: repo.name,
      repo_html_url: repo.html_url,
      repo_description: repo.description,
      repo_stargazers_count: repo.stargazers_count
    });

    // save each document to database
    addRepo.save((err, data) => {
      if (err) {
        throw err;
      } else {
        console.log(`${data} was saved to the database`);
      }
    });
  });
};

let get = callback => {
  const query = Repo.find({})
    .sort('-repo_stargazers_count')
    .limit(25);
  query.exec((err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  });
};

module.exports = { save, get };
