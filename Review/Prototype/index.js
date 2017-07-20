// console.log("hola");
'use strict'
// objeto persona
function Person(name, lastName, age, gender) {
  this.name = name;
  this.lastname = lastName,
  this.age = age,
  this.gender = gender
};

var person1 = new Person('Luis','Cubillo', 30, 'male');

// se puede creer hijos a partir de la siguiente declaracion
//Prototype of person2 is person1
var person2 = Object.create(person1);

//Gets the original constructor, maybe from a serialize object
var person3 = new person1.constructor('Diego','Chan',30,'male');

//prototype de una funcion.
Person.prototype.sayHello = function () {
  alert(this.name);
};

//
alert(msj);
var msj = 'hello world';
