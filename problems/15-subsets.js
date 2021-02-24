/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:



Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/


// your code here
// let subsets = array => {
//   let tempArr = [];
//   if (array.length === 0) {
//     return [[]];
//   }
//   let first = array[0];
//   let subArr = subsets(array.slice(1));
//   let restSubArray = [];
//   for (let i = 0; i < subArr.length; i++) {
//     //tempArr = subArr.slice(0);
//     restSubArray.push([first, ...subArr[i]]);
//   }
//   tempArr.push(...subArr, ...restSubArray);
//   return tempArr;
// }

const subsets = (arr) => {
  if (!arr.length) return [[]]; // base case, stop when the array is empty
  debugger
  const last = arr[arr.length - 1]; // grab the last element from the array for making pairs
  const subs = subsets(arr.slice(0, arr.length - 1)); // recursive call with a step taking out the last
  const restSubs = subs.map((el) => { // once we get all the way done recursing map each of the subs arrays
    console.log('el', el, 'last', last)
    return [...el, last]; // spread each el with the last to create a subarray
  });
  console.log('subs', subs, 'restSubs', restSubs)
  return [...subs, ...restSubs] // spread each restSubs into big array of all sets
}

// subsets([]) // [[]]
// subsets([1]) // [[], [1]]
// subsets([1, 2]) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
//subsets([1, 2, 3, 4])
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
