//simula multithreading - hilos
self.addEventListener('message', function(e){
  var data = e.data;
  switch (data.cmd) {
    case 'start':
        self.postMessage('Web Worker started: ' + data.msg);
      break;
    case 'stop':
        self.postMessage('Web Worker stopped:  '+ data.msg);
        self.close();
      break;
    default:
      self.postMessage('Unknown command: ' + data.msg);
  }
}, false);
