// let myFun = (a, b) => { return a + b }
// console.log(myFun(2,5));

// Default Parameters
let myFun = (a = 2, b = 5) => { return a + b }
console.log(myFun());

// Object Literals in ES6
function myFun2(name, age, salary){
  return {
    name, age, salary
  }
}
console.log(myFun2("Vicky", 27, 50000));


// classes in ES6
class a {
  constructor (name, age){
    this.name = name;
    this.age = age;
  }
  getName(){
    console.log(`name: ${this.name}`);
  }
}
let ref1 = new a("Bobby", 15);
ref1.getName();


// Lexical