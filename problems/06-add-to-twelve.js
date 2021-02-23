/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false

base case: if array.length < 2 return false
***********************************************************************/

const addToTwelve = numbers => {
  if (numbers.length < 2) return false;

  if (numbers[numbers.length - 1] + numbers[numbers.length - 2] === 12) return true;

  numbers.pop();
  return addToTwelve(numbers);


  // numbers = [1, 3, 4, 7]
}
console.log(addToTwelve([1, 3, 4, 7, 5])); // true)
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); //true 
console.log(addToTwelve([1, 12, 4, 7, 6])); //false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
