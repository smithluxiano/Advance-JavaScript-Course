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
  willIGetNewPhone.then(showOff).then(function(phone) {
    console.log('Fulfilled: ', phone);
  }).catch(function(error){
    console.log('Did not get the phone', error);
  });
}

var showOff = function(phone){
    return new Promise(function(resolve, reject){
        resolve('Hola Diego, vea mi telefono xD '+ phone.brand);
    });
};

askMom();


// var showOff = function(phone){
//   return Promise.resolve('Hola Diego, vea mi telefono xD'+ phone.brand)
// };
