// var test = 1;
var momIsHappy = true;

var willIGetNewPhone = new Promise(function(resolve, reject){
    if (momIsHappy) {
      var phone = {
        brand: 'Pixel',
        version: 2,
        color: 'black'
      };
      resolve(phone);
    } else {
      var reason = new Error('Mom Is Not happy');
      reject(reason);
    }
});

// Promise.resolve()
var askMom = function(){
  willIGetNewPhone.then(function(fulfilled) {
    console.log('Fulfilled: ', fulfilled);
  }).catch(function(error){
    console.log('Did not get the phone', error);
  });
}

askMom();
