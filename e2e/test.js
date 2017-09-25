
module.exports = {
  'Demo test' : function (browser) {
    browser
      .url("http://www.baidu.com")
      .waitForElementVisible('body', 1000)
      .setValue('#index-kw',"面向对象")
      .click('#index-bn')
      .assert.containsText('body', '面向对象')
       .saveScreenshot('./test.png')
      .end();
  }
};