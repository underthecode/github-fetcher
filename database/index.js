const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/fetcher', {
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

let repoSchema = mongoose.Schema({
  repos_id: { type: String, unique: true },
  repos_full_name: String,
  repos_html_url: String,
  repos_description: String,
  repos_updated_at: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = data => {
  // `data` is an array of objects
  // each elelment in array is a `repo`

  // iterate over each `repo`
  data.forEach(repo => {
    const repos_id = repo.id;
    const repos_full_name = repo.full_name;
    const repos_html_url = repo.hthml_url;
    const repos_description = repo.description;
    const repos_updated_at = repo.updated_at;

    // construct a document for each `repo`
    const addRepo = new Repo({
      repos_id,
      repos_full_name,
      repos_html_url,
      repos_description,
      repos_updated_at
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

module.exports.save = save;
