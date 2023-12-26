/*
DESCRIPTION:
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/
const capitals = (word) => {
  const indexes = [...word].map((el, _, arr) => arr.indexOf(el.toUpperCase()));

  return [...new Set(indexes)].filter((el) => el >= 0).sort((a, b) => a - b);

  //   return [...word].reduce((acc, el, i) => {
  //     return el === el.toUpperCase() ? [...acc, i] : acc;
  //   }, []);

  //   return word.match(/[A-Z]/g).map((el) => word.indexOf(el));
};

console.log(capitals('CodEWaRs')); //[0,3,4,6]
console.log(capitals('SZpagzXKdb')); //[0,1,6,7]
console.log(capitals('okBQGSOqve')); //[2,3,4,5,6]
