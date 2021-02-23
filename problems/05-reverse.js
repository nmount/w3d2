/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:


***********************************************************************/

// your code here
function reverse(string) {
  if (string.length === 0) {
    return '';
  }
  return reverse(string.slice(1)) + string[0];
}
//ouseh; <---
//useho
//sehou
//ehous
//house

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
