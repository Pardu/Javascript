var ar = [1, 2, 3, 4, 5, 6];
ar.length = 4; // set length to remove elements
console.log( ar ); //  [1, 2, 3, 4]

var ar = [1, 2, 3, 4, 5, 6];
ar.pop(); // returns 6
console.log( ar ); // [1, 2, 3, 4, 5]

var ar = ['zero', 'one', 'two', 'three'];
ar.shift(); // returns "zero"
console.log( ar ); // ["one", "two", "three"]

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = array.splice(2,2);

/*
removed === [3, 4]
array === [1, 2, 5, 6, 7, 8, 9, 0]
*/


["bar", "baz", "foo", "qux"]

list.splice(0, 2) 
// Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for( var i = 0; i < array.length-1; i++){ 
   if ( array[i] === 5) {
     arr.splice(i, 1); 
   }
}

//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var filtered = array.filter(function(value, index, arr){

    return value > 5;

});

//filtered => [6, 7, 8, 9]
//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 === 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]


function arrayRemove(arr, value) {

   return arr.filter(function(ele){
       return ele != value;
   });

}

var result = arrayRemove(array, 6);

// result = [1, 2, 3, 4, 5, 7, 8, 9, 0]


var ar = [1, 2, 3, 4, 5, 6];
delete ar[4]; // delete element with index 4
console.log( ar ); // [1, 2, 3, 4, undefined, 6]
alert( ar ); // 1,2,3,4,,6
