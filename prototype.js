'use strict';

var arr = ['Red',' Blue', 'Yellow'];
Object.defineProperty(Array.prototype, 'last', {
 get: function(){
  return this[this.length-1];
 }
});

var arr2 = ['Alex', 'Junior','Afonso'];

console.log(arr.last);
console.log(arr2.last);

var hourOfCode = function(){}
// Prototype from functions represents instance of function using function as a constructor
console.log(hourOfCode.prototype);

var activity = {name : 'Lesson 78'};
// Represents instance from object from wich obj is inherited
console.log(activity.__proto__);

function Person(name){
 this.name = name;
}

console.clear();
Person.prototype.age = 1;
console.log(Person.prototype);
var p = new Person("Alexander");
console.log(p.__proto__);
console.clear();

var p2 = new Person("Afonso");
console.log(p.age);
p2.age = 2;
// Age inherited from prototype function
console.log(p2.__proto__.age);
// Age setted before line
console.log(p2.age);

console.log(p.hasOwnProperty('age'));
console.log(p2.hasOwnProperty('age'));

class Animal {
  constructor(voice){
    this.voice = voice || 'grunt';
  }
  
  speak(){
  console.log(this.voice);
  }
}

console.clear();
var animal = new Animal("Meoow").speak();

class Cat extends Animal {
  constructor(name, color){
   super("Meowwwwwwww");
   this.name = name;
   this.color = color;
  }
}

console.log(new Cat().speak());