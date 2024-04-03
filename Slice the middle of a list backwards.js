/*
DESCRIPTION:
Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.
*/
function reverseMiddle(array) {
  return array
    .reverse()
    .slice(
      array.length / 2 - 1,
      array.length / 2 + (array.length % 2 === 0 ? 1 : 2)
    );
  ////////////////////!SECTION
  //   const n = array.length;
  //   return array.slice(Math.floor(n / 2) - 1, Math.ceil(n / 2) + 1).reverse();
}

console.log(reverseMiddle([1, 2, 3, 4])); //[3, 2]
console.log(reverseMiddle([1, 2, 3, 4, 5])); //[4, 3, 2]
console.log(reverseMiddle([1, 2, 3, 4, 5, 6])); //[4, 3]
console.log(reverseMiddle([1, 2, 3, 4, 5, 6, 7])); //[5, 4, 3]
