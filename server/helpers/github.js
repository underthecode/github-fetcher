const request = require('request');
const config = require('../config/config');

let getReposByUsername = (user, callback) => {
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`
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
