var path = require('path');

module.exports = {
  tags: ['sanity'],

  before: function(client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));
  },

  'Load Bing.com': function (client) {
    client.page.homepage.load().end();
  }
};
