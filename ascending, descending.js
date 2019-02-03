let nums = [1,5,4,3,6,7];
let res = nums.sort(function(a,b){ return a-b });
console.log(res);

let res2 = nums.sort(function(a,b){ return b-a });
console.log(res2);

let chars = ["z","x","c","v","b","n","m"];
let res3 = chars.sort();
console.log(res3);

let res4 = chars.sort().reverse();
console.log(res4);
// let res4 = chars.sort((a,b) => b.localCompare(a, 'en', {sensitivity:'base'}));
// console.log(res4);