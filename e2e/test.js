
module.exports = {
  'Demo test' : function (browser) {
     console.log(browser.globals);
    
  },
  after : function(browser) {
      browser.end();
  }

};