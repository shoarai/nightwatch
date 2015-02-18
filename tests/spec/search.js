var path = require('path');

module.exports = {
  tags: ['sanity', 'search'],

  before: function(client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));
  },

  'Bing search from homepage': function (client) {
    var searchTerm = 'selenium';

    client
      .page.homepage.load()
      .page.homepage.search(searchTerm)
      .page.search_results.assertResults(searchTerm)
      .page.search_results.navImages()
      .saveScreenshot('./screen/selenium.png')
      .end();
  }
};
