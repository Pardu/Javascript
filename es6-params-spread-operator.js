function greet($greeting = "Hello"){
  console.log($greeting);
}
// function greet(greeting = "Hello"){
//   console.log(greeting);
// }
greet();

//JavaScript ES6 / ES2015 - Default Params & Spread Operator
let arr1 = [1,2,3];
let arr2 = [4,5,6];

function addArrs(){
  console.log(arr1 + ',' + arr2);
}
addArrs(...arr1, ...arr2);

