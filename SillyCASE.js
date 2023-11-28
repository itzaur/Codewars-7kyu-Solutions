/*
DESCRIPTION:
Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

sillycase("brian")
//         --^-- midpoint
//         bri    first half (lower-cased)
//            AN second half (upper-cased)
*/
function sillycase(silly) {
  const halfArr = Math.round(silly.length / 2);

  return (
    silly.toLowerCase().slice(0, halfArr) + silly.toUpperCase().slice(halfArr)
  );
}

console.log(sillycase('foobar')); //'fooBAR'
console.log(sillycase('codewars')); //'codeWARS'
console.log(sillycase('brian')); //'briAN'
console.log(sillycase('javascript')); //'briAN'
