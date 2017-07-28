function makeSizer(size){
    var suffix = 'px';
    return function(){
        document.body.style.fontSize = size + suffix;
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('12').onclick = size12;
document.getElementById('14').onclick = size14;
document.getElementById('16').onclick = size16;