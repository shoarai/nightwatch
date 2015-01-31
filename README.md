# nightwatch
UI automated testing framework based on node.js and selenium webdriver. [http://nightwatchjs.org](http://nightwatchjs.org)

### Install

Install Node.js and then:
```sh
$ git clone http://github.com/shoarai/nightwatch.git
$ cd nightwatch
$ npm install
```

### Usage
To run tests:
```sh
$ npm test
```

### Select browser
Tests run in `Firefox`, `Google Chrome` or `Internet explorer`.
To select the browser, edit `Nigthwatchfile.js`:
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
To select `Chrome in Windows`:
```js
selenium: {
  cli_args: {
    'webdriver.chrome.driver': './node_modules/.bin/chromedriver.cmd',  // in Windows
    // 'webdriver.chrome.driver': './node_modules/.bin/chromedriver',      // in Mac
    ...
```
