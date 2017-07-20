function AddCounter() {
    if (typeof(Storage)!== 'undefined') {
      //exist
      if (sessionStorage.count) {
        sessionStorage.count = Number(sessionStorage.count)+1;
      } else{
        sessionStorage.count = 1;
      }
      document.getElementById('result').innerHTML = sessionStorage.count;
    }else {
        //does not exist
        document.getElementById('result').innerHTML = 'Sorry no storage';
    }
}
