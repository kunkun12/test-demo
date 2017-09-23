
module.exports = {
  'Demo test' : function (browser) {
    browser
      .url("http://www.baidu.com")
      .saveScreenshot('./test.png')
      .pause(4000)
      // ...
      .end();
  }
};