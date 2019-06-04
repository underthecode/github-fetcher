const request = require('request');
const config = require('../config/config');

let getReposByUsername = () => {
  let options = {
    url: '',
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`
    }
  };
};

module.exports.getReposByUsername = getReposByUsername;
