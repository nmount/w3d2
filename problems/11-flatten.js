/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]

Array.isArray(element);


***********************************************************************/

const flatten = array => {
  let newArray = [];
  debugger;
  if (array.length === 0) return [];


  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];

    if (Array.isArray(currentElement)) {
      newArray.push(...flatten(currentElement));
    } else {
      newArray.push(currentElement);
    }
  }

  return newArray;
}

console.log(flatten([1, [2, [3]]])); // [1, 2, 3])
console.log(flatten([1, [2, [3]], [[[9]], 2]])); // ultimate test case, [1, 2, 3, 9, 2]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
