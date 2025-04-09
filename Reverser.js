/*
Description:

Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys

*/
function reverse(n) {
  return +[...decodeURIComponent(n)].reverse().reduce((acc, el) => acc + el);
  //////////////////////////////!SECTION
  //   return +Array.of(n).join().split([]).reverse().join([])
}

console.log(reverse(1234)); //4321
console.log(reverse(10987)); //78901
console.log(reverse(1020)); //201
