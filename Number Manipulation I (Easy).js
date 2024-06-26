/*
DESCRIPTION:
For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000
*/
function manipulate(num) {
  const halfLength = `${num}`.length / 2;
  console.log(halfLength);

  return +(
    [...`${num}`].slice(0, halfLength).join`` +
    Array(halfLength + (Number.isInteger(halfLength) ? 0 : 0.5)).fill(0).join``
  );
  ////////////////////////////////!SECTION
  //   return `${num}`.slice(0, `${num}`.length / 2).padEnd(`${num}`.length, 0);
}

console.log(manipulate(192827764920)); //192827000000
console.log(manipulate(838473)); //838000
console.log(manipulate(8173648710293847)); //8173648700000000
console.log(manipulate(938473)); //938000
console.log(manipulate(6674493)); //938000
