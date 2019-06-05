// keys.js
if (process.env.NODE_ENV === 'production') {
  // app is in prod - return prod keys
  module.exports = require('./prod');
} else {
  // app is in dev - return dev keys
  module.exports = require('./dev');
}
