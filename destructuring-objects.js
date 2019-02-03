// Template Literals //
// multi line TLs
// let a = 5;
// let b = 10;
// console.log('Fifteen is ' + (a + b) + ' and \n not ' + (2 * a + b) + '.');

// let c = 5;
// let d = 10;
// console.log(`Fifteen is ${c + d} 
// and 
// not ${2 * c + d}.`);


// functions
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0];
  let str1 = strings[1];

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }
  return `${str0}${personExp}${str1}${ageStr}`;
}
let output = myTag`That ${ person } is a ${ age }`;
// console.log(output);

//In arrays
let addVals = (x,y,z) => { return x * y * z }
let nums = [2,3,4];
// console.log(addVals(...nums));


let arr1 = ['two', 'three'];
let arr2 = ['one', ...arr1, 'four', 'five'];
// console.log(arr2);

let arr3 = `['one', ${arr1}, 'four', 'five']`;
// console.log(arr3);

let arr = [1,2,3];
let arr5 = [...arr]; // like arr5.slice()
// console.log(arr5);
// console.log(arr5.push(4));

let numbers = [9, 2, 7, 11];
let minVal = () => { return Math.min(...numbers) };
// console.log(minVal());


// rest operator
function myFun(a, b, ...manyMoreArgs) {
  // console.log("a", a); 
  // console.log("b", b);
  // console.log("manyMoreArgs", manyMoreArgs); 
}
myFun("one", "two", "three", "four", "five", "six");


// Objects
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x);
// console.log(y);
// console.log(z);

/*
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
*/
// var a, b, rest;
// [a, b] = [10, 20];
// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);

// ({x, y, ...rest} = {x: 5, y: 7, z: 9, s: 10, p: 11});
// console.log(x);
// console.log(y);
// console.log(rest);

/*
The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
*/
// let w = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = w;
// console.log(a);
// console.log(b);
// console.log(rest);


// let myFun2 = () => {return [1, 2]}
// let [a, b] = myFun2();
// console.log(a);
// console.log(b);

// Objects Destructuring
// var x = {a: 42, b: true};
// var {a, b} = x;
// console.log(a);
// console.log(b);

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
console.log(a);
console.log(b);
console.log(rest);

var personX = {name: "Sarah", country: "Nigeria", job: "Developer"};

    var name = personX.name;
    var country = personX.country;
    var job = personX.job;

    console.log(name);
    console.log(country);
    console.log(job);

/*
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}
displaySummary(student);
*/


// Destructuring Object
const student3 = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

// Object Destructuring
const { firstname, lastname, country } = student3;

console.log(firstname, lastname, country);


/*
let str = "Welcome to javascript";
let res =    `Hi, ${str}`;

console.log(res);

let obj = {
  name: "Sumith",
  age: 27,
  isMarried: false
}

let {name, age, isMarried} = obj;

function getArr(){
  return ["Hi", "Welcome ", "to ", "javascript"];
}
let [a, b, c, d] = getArr();
// let result = getArr();
console.log(a);
console.log(c);
console.log(d);

let arr2 = [24, 587, 63, 97, 21];
function addFun(a,b,c,d,e){
  return a+b+c+d+e;
}
console.log(addFun(...arr2));

// let arr3 = [24, 587, 63, 97, 21];
function addFun(x, y, ...z){
  console.log(x+y+z);
  return x+y+z;
}
console.log(addFun(2,3,4,5,6));
*/