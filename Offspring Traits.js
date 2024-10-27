/*
Description:
A population of bears consists of black bears, brown bears, and white bears.

The input is an array of two elements.

Determine whether the offspring of the two bears will return 'black', 'brown', 'white', 'dark brown', 'grey', 'light brown', or 'unknown'.

Elements in the the array will always be a string.

Examples:
bear_fur(['black', 'black'])  returns 'black'

bear_fur(['brown', 'brown'])  returns 'brown'

bear_fur(['white', 'white'])  returns 'white'

bear_fur(['black', 'brown'])  returns 'dark brown'

bear_fur(['black', 'white'])  returns 'grey'

bear_fur(['brown', 'white'])  returns 'light brown'

bear_fur(['yellow', 'magenta'])  returns 'unknown'
*/
const bearFur = (bears) => {
  const [color1, color2] = bears;

  switch (true) {
    case color1 == color2:
      return color1;
    case bears.includes('black') && bears.includes('white'):
      return 'grey';
    case bears.includes('brown') && bears.includes('white'):
      return 'light brown';
    case bears.includes('brown') && bears.includes('black'):
      return 'dark brown';
    default:
      return 'unknown';
  }
};
//////////////////////////////////////////!SECTION
// function bearFur([b1, b2]) {
//   const bears = {
//     black: {
//       black: 'black',
//       brown: 'dark brown',
//       white: 'grey',
//     },
//     brown: {
//       black: 'dark brown',
//       brown: 'brown',
//       white: 'light brown',
//     },
//     white: {
//       black: 'grey',
//       brown: 'light brown',
//       white: 'white',
//     },
//   };
//   return (bears[b1] || {})[b2] || 'unknown';
// }

console.log(bearFur(['black', 'black'])); //'black'
console.log(bearFur(['brown', 'brown'])); //'brown'
console.log(bearFur(['white', 'white'])); //'white'
console.log(bearFur(['black', 'brown'])); //'dark brown'
console.log(bearFur(['black', 'white'])); //'grey'
console.log(bearFur(['brown', 'white'])); //'light brown'
console.log(bearFur(['yellow', 'magenta'])); //'unknown'
