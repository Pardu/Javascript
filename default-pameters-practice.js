/* Default Parameters
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

// Ex:- 1
let multiply = (a, b = 1) => { return a * b}
console.log(multiply(5, 5)); // 25
console.log(multiply(7)); // 7

// Ex:- 2
In the following example, if no value is provided for b when multiply is called, b’s value would be undefined  when evaluating a * b and multiply would return NaN.

let multiplyFun = (a, b) => { return a * b}
console.log(multiplyFun(5, 5)); // 25
console.log(multiplyFun(7)); // NaN

// Ex:- 3
function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1;
  return a * b;
}
console.log(multiply(5, 5)); // 25
console.log(multiply(7)); // 7

// Ex:- 4
function test(num = 1) {
  console.log(typeof num);
}
test();          // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)
// test with other falsy values:
test('');        // 'string' (num is set to '')
test(null);      // 'object' (num is set to null)

// Ex:- 5 Array Default Parameters
function append(value, array = []) {
  array.push(value);
  return array;
}
console.log(append(1)); //[1]
console.log(append(2)); //[2], not [1, 2]

// Ex:- 6
function callSomething(thing = something()) {
 return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

console.log(callSomething()); // 1
console.log(callSomething()); // 2
console.log(callSomething()); // 3
console.log(callSomething()); // 4
console.log(callSomething()); // 5
console.log(callSomething()); // 6
*/
// Ex:- 7
function f(x = 1, y) { 
  return [x, y]; 
}
console.log(f()); // [1, undefined]
console.log(f(2)); // [2, undefined]



// Reference Links:--
/*
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
2. https://dev.to/sarah_chima/default-parameters-in-es6-blc
3. https://css-tricks.com/using-default-parameters-es6/
*/