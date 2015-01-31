# nightwatch
UI automated testing framework based on node.js and selenium webdriver. [http://nightwatchjs.org](http://nightwatchjs.org)

### Install

Install Node.js and then:
```sh
$ git clone git@github.com:shoarai/nightwatch.git
$ cd nightwatch
$ npm install
```

### Usage
To run tests:
```sh
$ npm test
```

### Select browser
To select browser for test, edit `Nigthwatchfile.js`:
```js
test_settings: {
  default: {
    ...
    desiredCapabilities: {
      browserName: 'firefox',
      // browserName: 'chrome',
      // browserName: 'internet explorer',
      ...
```
To select chrome in windows:
```js
selenium: {
  cli_args: {
    'webdriver.chrome.driver': './node_modules/.bin/chromedriver.cmd',  // in windows
    // 'webdriver.chrome.driver': './node_modules/.bin/chromedriver',      // in mac
    ...
```
