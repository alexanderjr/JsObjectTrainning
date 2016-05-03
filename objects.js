'use strict';

//Create Literal Object
var cat = {name: 'Flush'};
cat.show = function(){console.log(this.name)};
cat.show();

// USING CONSTRUCTOR FUNCTION
function Person(name, age){
  this.name = name;
  this.age  = age;
  
  this.show = function(){
    console.log("My name is " + this.name + " and my age is " + this.age + " years old");
  }
}

var p = new Person("Alexander", 23).show();

//USING OBJECT CREATED CREATE
var Dog = Object.create(Object.prototype, {
 name : {
  value: "Fubá",
  enumerable:true,
  writable:true,
  configurable:true
 },
 show: {
  value : function(){
    console.log(this.name);
  }
 }
});

Dog.show()

// Creating class by EMCA6 Spec
class Activity {
 constructor(name, grade){
   this.name = name;
   this.grade= grade;
 }
 
 show(){
  console.log(this.name);
 }
}

var a = new Activity("Lesson 78 - History of Brazil");
a.show();

//Describing Object Property
console.log(Object.getOwnPropertyDescriptor(a, 'name'));
// Setting Object Property

// Read Only Prop
Object.defineProperty(a, 'name', {writable : false});

// Enumerable Prop
Object.defineProperty(a, 'grade', {enuramerable : false});
//Remove property from any iteration 
console.log(JSON.stringify(a));

// Configurable Prop
//Object.defineProperty(a, 'grade', {configurable : false});
//delete a.grade;


var teacher = {name : {first: 'Mr.', last: 'Deeds'}, subject: 'Math'};

//Define set and getter
Object.defineProperty(teacher, 'fullName', {
  get : function(){
    return this.name.first + " " + this.name.last;
  },
  set: function(value){
   var temp = value.split(' ');
   this.name.first = temp[0];
   this.name.last  = temp[1];
  }
});

console.log(teacher.fullName);
teacher.fullName = "Chapoli Colorado";
console.log(teacher.fullName);
