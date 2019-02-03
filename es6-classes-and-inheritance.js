// Claases in ESS6
/*
// Ex:- 1
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

let d = new Dog('Mitzie');
console.log(d.speak()); // Mitzie barks.

// Ex:- 2
class Polygon { 
   constructor(height, width) { 
      this.h = height; 
      this.w = width;
   } 
   test() { 
      console.log("The height of the polygon: ", this.h) 
      console.log("The width of the polygon: ",this. w) 
   } 
} 
*/
/*
creating an instance - 
1. An instance, in object-oriented programming (OOP), is a specific realization of any object. An object may be varied in a number of ways. Each realized variation of that object is an instance. The creation of a realized instance is called instantiation. Each time a program runs, it is an instance of that program.

2. In object-oriented programming (OOP), an instance is a concrete occurrence of any object, existing usually during the runtime of a computer program. ... An object is an instance of a class, and may be called a class instance or class object; instantiation is then also known as construction.

var polyObj = new Polygon(10,20); 
console.log(polyObj.test());

// Ex:- 3
function Dog (name) {
  this.name = name;
}
var fido = new Dog('Fido');
console.log(fido.name);
*/
/* */
// Ex:- 4
// ES 6
/*
class Vehicle {
  constructor (name, type){
    this.name = name;
    this.type = type;
  }

  getName(){
    return this.name;
  }

  getType(){
    return this.type;
  }
}

let car = new Vehicle("Ferrari", "Sports");
console.log(car.getName());
console.log(car.getType());
*/
/* 
// ES 5
function Vehicle (name, type) {
  this.name = name;
  this.type = type;
};
 
Vehicle.prototype.getName = function getName () {
  return this.name;
};
 
Vehicle.prototype.getType = function getType () {
  return this.type;
};
var car = new Vehicle('Ferrari', 'Sports');
console.log(car.getName());
console.log(car.getType());
*/

// Inheritance
class Vehicle {
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
 
  getName () {
    return this.name;
  }
 
  getType () {
    return this.type;
  }
 
}
class Car extends Vehicle {
  constructor (name, type) {
    // super(name, 'car');
    super(name, type);
    // super();
    //this.name = name;
  }

  getName () {
    // return 'It is a car: ' + super.getName();
    return this.name;
  }
 
}
let v1 = new Vehicle("Maruti", "Aulto");
let c1 = new Car('Tesla', 'car');

console.log(v1.getName()); // Maruti
console.log(car.getName()); // It is a car: Tesla
// console.log(car.getType()); // car
/* */


// Interfaces
// An interface is a structure that enforces specific properties on an object — in most languages this object is a class.


// JavaScript Object Literal
//A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.
// Ex:- 1
// let myObject = {
//     name: 'John',
//     age: 27,
//     isMarried: false
// };
// console.log(myObject.name);
/*
Note: Object Literal Syntax
Object literals are defined using the following syntax rules:

A colon separates property name[1] from value.
A comma separates each name-value pair from the next.
There should be no comma after the last name-value pair.
*/
