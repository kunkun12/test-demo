

function sleep(){
  return new Promise(function(resolve,reject){
      // setTimeout(function(){
        resolve(3);
      // },2000)
  })
}

module.exports = sleep;