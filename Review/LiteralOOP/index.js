//literal object
// var person = {
//    name: ['Fulano','De Tal'],
//    age: 32,
//    gender: 'male',
//    interest: {job: 'programing', joby:'gamming'},
//    bio: function(){
//        alert(this.name[0]+ ' '+this.name[1] + ' is '+ this.age+' years old.');
//    },
//    greeting: function(){
//        alert('Hi I am '+ this.name[0]);
//    }
//}

//constructor object
function Person(name) {
    this.name = name;
    this.greeting = function () {
        alert('Hi, my name is ' + this.name);
    };
}

var person1 = new Person('Luis');
var person1 = new Person('Diego');


console.warn('object', person1);

//constructor object object class
var person3 = new Object();
person3.name = 'Roy';
person3.greeting = function(){
    alert('Hi my name is '+ this.name);
}


var person4 = new Object(person3);//clonado

console.warn('object', person3);
console.warn('object', person4);

var person5 = Object.create(person1);

console.warn('object', person5);

//-----------------------------------------------------------------------
var input = document.querySelector('input');
var button = document.querySelector('button');
var p = document.querySelector('p');

button.onclick = function () {
    var code = input.value;
    p.textContent = eval(code);
};
