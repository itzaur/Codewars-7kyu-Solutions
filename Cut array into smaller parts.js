/*
DESCRIPTION:
Write function makeParts or make_parts (depending on your language) that will take an array as argument and the size of the chunk.

Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.
*/
function makeParts(arr, chunkSize) {
  //   const result = [];

  //   for (let i = 0; i <= arr.length; i += chunkSize) {
  //     result.push(arr.slice(i, i + chunkSize));
  //   }

  //   return result.filter((el) => el.length);

  return arr.slice(0, chunkSize).length < arr.length
    ? [arr.slice(0, chunkSize), ...makeParts(arr.slice(chunkSize), chunkSize)]
    : [arr];
}

console.log(makeParts([1, 2, 3, 4, 5], 2)); //[[1,2],[3,4],[5]]
console.log(makeParts([1, 2, 3], 1)); //[[1],[2],[3]]
console.log(makeParts([1, 2, 3, 4, 5], 10)); //[[1,2,3,4,5]]
