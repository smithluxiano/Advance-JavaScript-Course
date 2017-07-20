function SayHi(){
 worker.postMessage({'cmd':'start','msg':'Hi'});
}

function unknownCommand(){
 worker.postMessage({'cmd':'Hola Mundo','msg':'???'});
}

function stop(){
  worker.postMessage({'cmd':'stop','msg':'Bye'});
}

var worker = new Worker('worker.js');

worker.addEventListener('message', function(e){
  document.getElementById('result').textContent = e.data;
},false);
//false al final para evitar el evet propagation.
