const request = require('request');
const keys = require('../config/keys');

let getReposByUsername = (user, callback) => {
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${keys.TOKEN}`
    }
  };

  // found code snippet inside of request NPM docs
  request(options, (err, response, body) => {
    if (err && !response.statusCode === 201) {
      callback(err, null);
    } else {
      const repos = JSON.parse(body);
      callback(null, repos);
    }
  });
};

module.exports.getReposByUsername = getReposByUsername;
