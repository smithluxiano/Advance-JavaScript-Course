//Normal Callbacks
function start(done) {
  //param will be my callback
  console.log('starting app...');
  done();
};

start(function(){
  console.log('Callback done...');
});

start(startReady);

var startReady = function () {
  console.log('startReady called...');
};

// Error Callbacks-------------------------------------------------------

function saveUser(){
 // saving user...
 if (user) {
   success();
 }else {
   fail();
 }
};

saveUser({}, function(){
  //sucess...
}, function(error){
  console.error('Something happened', error);
});
