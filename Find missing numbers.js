/*
DESCRIPTION:
You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]
*/
function findMissingNumbers(arr) {
  const fullArr = Array.from(
    { length: arr.at(-1) - arr.at() + 1 },
    (el, i) => arr[0] + i
  );

  const result = [...arr, ...fullArr];

  return result.filter((el, i) => result.indexOf(el) == result.lastIndexOf(el));

  //   return Array.from(
  //     { length: arr.slice(-1) - arr[0] },
  //     (_, idx) => arr[0] + idx
  //   ).filter((val) => !arr.includes(val));
}

console.log(findMissingNumbers([-3, -2, 1, 4])); //[-1,0,2,3]
console.log(findMissingNumbers([-1, 0, 1, 2, 3, 4])); //[]
console.log(findMissingNumbers([])); //[]
