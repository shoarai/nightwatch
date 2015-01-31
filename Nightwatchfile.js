module.exports = {
  src_folders: ['./tests/spec'],
  output_folder: './reports',
  custom_assertions_path: '',
  globals_path: './globals.json',
  live_output: true,

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-2.44.0.jar',
    log_path: './reports',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',      // in Mac
      // 'webdriver.chrome.driver': './node_modules/.bin/chromedriver.cmd',  // in Windows
      'webdriver.ie.driver': './node_modules/dalek-browser-ie/lib/bin/IEDriverServer.exe'
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      silent: true,
      disable_colors: false,
      screenshots: {
        enabled: true,
        path: './screen'
      },
      desiredCapabilities: {
        browserName: 'firefox',
        // browserName: 'chrome',
        // browserName: 'internet explorer',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
};
