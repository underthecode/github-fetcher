const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({});

let Repo = mongoose.model('Repo', repoSchema);

let save = () => {};

module.exports.save = save;
