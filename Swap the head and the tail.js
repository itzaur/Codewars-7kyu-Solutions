/*
DESCRIPTION:
You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

Return new array.

For example:

   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
    \----/   \----/
     head     tail

   [ -1, 2 ]  => [ 2, -1 ]
   [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]
*/
function swapHeadAndTail(arr) {
  const head = arr.slice(0, arr.length / 2);
  const tail = arr.slice(Math.ceil(arr.length / 2));
  const middle =
    arr.length % 2 !== 0 ? arr.slice(arr.length / 2, arr.length / 2 + 1) : [];

  return [...tail, ...middle, ...head];
}

// const swapHeadAndTail = (arr, mid = arr.length / 2) => [
//   ...arr.slice(-mid),
//   ...arr.slice(mid, -mid),
//   ...arr.slice(0, mid),
// ];

console.log(swapHeadAndTail([1, 2, 3, 4, 5])); //[ 4, 5, 3, 1, 2 ]
console.log(swapHeadAndTail([-1, 2])); //[ 2, -1 ]
console.log(swapHeadAndTail([1, 2, -3, 4, 5, 6, -7, 8])); //[ 5, 6, -7, 8, 1, 2, -3, 4 ]
