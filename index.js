/* Inheritance:-
The simplest use of inheritance in JavaScript is the ability to create a new object, or instance,  that inherits all properties from another (parent) object. We want to do this because we are lazy, we don’t want to write the same piece of code over and over again. Instead, we want to write the code once, and then create new instances of our object as many times as we like. Using inheritance makes our code reusable, readable and therefore clean.
*/
// Classical Inheritance
/*
Classical inheritance is a powerful feature of many object-oriented programming languages. It involves organizing classes into a hierarchy, and enabling these classes to inherit attributes and behavior from classes above in the hierarchy.
*/

// హెంక్ మరియు రోడ్రిగో మానవుల యొక్క నూతన సంస్కరణలు
// Prototypal Inheritance
/*
JavaScript's class inheritance uses the prototype chain to wire the child `Constructor.prototype` to the parent `Constructor.prototype` for delegation. Usually, the `super()` constructor is also called. ... Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.
*/
// Classical Inheritance in ES5
/*
Henk and Rodrigo are both new instances of Human. They both have a name and an age.

Let’s say our Human Henk is not a normal human, but a developer. Most humans have a facebook account. Henk doesn’t have Facebook because he doesn’t trust big companies. We can overwrite that property for just Henk:
*/
/*
let Human = function(name, age){
    this.name = name;
    this.age = age;
    this.hasFacebook = true;
}

// Create new instances(!) of Human
let henk = new Human("Henk", 100), 
    rodrigo = new Human("Rodrigo", 30);
    
// Change henk's hasFacebook propery
henk.hasFacebook = false;

console.log(henk.hasFacebook); // false
console.log(rodrigo.hasFacebook); // true
*/
/*
In the example above we see that initially, Henk inherits the hasFacebook property from Human, but that we can change the value if we like to false.
*/
// Prototypal Inheritance in ES5
// Prototypical inheritance is a little difference. Rather than a function, we just create a new objects by using human as a prototype

let human = {
     hasFacebook: true,
     giveName: function(name){
         return this.name = name
     },
     giveAge: function(age){
         return this.age = age;
     }
 }
 
 let human1 = function() {
     this.hasFacebook = true;
     this.giveName = function(name){
         return this.name = name
     };
     this.giveAge = function(age){
         return this.age = age;
     }
 }
 // Create new instances (!) of human
 let henk = Object.create(human),
     rodrigo = Object.create(human); // creates new empty object
console.log(henk);
console.log(human.isPrototypeOf(henk));
console.log(henk.giveName("Thomas"));
console.log("****************");

console.log(henk.giveName("Henk"));
console.log(henk.giveAge(100));
console.log(rodrigo.giveName("Rodrigo"));
console.log(rodrigo.giveAge(30));

let henk1 = new human1(); // best practice give inner methods and its properties
console.log("****************");
console.log(human1.isPrototypeOf(henk1));
console.log("****************");
console.log(henk1 instanceof human1);
console.log("****************");
let rodrigo1 = new human1(); 
//console.log(henk1);
console.log(henk1);
console.log(henk1.giveName("Henk"));
console.log(henk1.giveAge(100));
console.log(rodrigo1.giveName("Rodrigo"));
console.log(rodrigo1.giveAge(30));
 
 /*
 // Or just one method:
 human.create = function(name, age){
     this.name = name;
     this.age = age;
 }
 henk.create("Henk", 100);
 rodrigo.create("Rodrigo", 30);

*/



/*
// Classical Inheritance in ES5
function Greeter (name) {
  this.name = name || 'John Doe';
}

Greeter.prototype.hello = function hello () {
  return 'Hello, my name is ' + this.name;
}

var george = new Greeter('George');
var msg = george.hello();
console.log(msg); // Hello, my name is George


// Classical Inheritance in ES6
class Greeter {
  constructor (name) {
    this.name = name || 'John Doe';
  }
  hello () {
    return `Hello, my name is ${ this.name }`;
  }
}

const george = new Greeter('George');

const msg = george.hello();

console.log(msg); // Hello, my name is George
*/



/*
// In ES5 Prototypal Inheritance
function Animal (name, fierce) {
  Object.defineProperty(this, 'name', {
    get: function() { return name; }
  });

  Object.defineProperty(this, 'fierce', {
    get: function() { return fierce; }
  });
}

Animal.prototype.toString = function() {
  return 'A' + ' ' + ( this.fierce ? 'fierce' : 'tame' ) + ' ' + this.name;
}
var Lion = new Animal('Lion', true);
console.log(Lion.toString()); // "A fierce Lion"

let Lion = new Animal('Lion', true);
console.log(Lion.fierce); 
console.log(Lion.toString())

// in ES6 Prototypal Inheritance
class Animal {

  constructor(name, fierce){
      this._name = name;
      this._fierce = fierce;
  }

  get name() {
    return this._name;
  }

  get fierce() {
    return ` This animal is ${ this._fierce ? 'fierce' : 'tame' }`;
  }

  toString() {
    return `This is a ${ this._fierce ? 'fierce' : 'tame' } ${this._name}`;
  }

}
let Lion = new Animal('Lion', true);
console.log(Lion.fierce); 
console.log(Lion.toString())
*/


/*
//I prefer a factory function using `Object.create()`. (In JavaScript, any function can create new objects. When it’s not a constructor function, it’s called a factory function):
const proto = {
  hello () {
    return `Hello, my name is ${ this.name }`;
  }
};

const greeter = (name) => Object.assign(Object.create(proto), {
  name
});

const george = greeter('george');

const msg = george.hello();

console.log(msg);
*/