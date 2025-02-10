/*
Description:

You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.
*/
function oddBall(arr) {
  const index = arr.findIndex((el) => el === 'odd');

  return arr.some((el) => el === index);
  //////////////////////////////////////!SECTION
  //   return arr.includes(arr.indexOf("odd"));
}

console.log(
  oddBall([
    'even',
    4,
    'even',
    7,
    'even',
    55,
    'even',
    6,
    'even',
    10,
    'odd',
    3,
    'even',
  ])
); //true
console.log(
  oddBall([
    'even',
    4,
    'even',
    7,
    'even',
    55,
    'even',
    6,
    'even',
    9,
    'odd',
    3,
    'even',
  ])
); //false
console.log(oddBall(['even', 10, 'odd', 2, 'even'])); //true
