/*
DESCRIPTION:
Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

Examples
1 is a strong number, because 1! = 1, so return "STRONG!!!!".
123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".
*/
function strong(n) {
  return [...`${n}`]
    .reduce((acc, el) => {
      return [
        ...acc,
        Array.from({ length: el }, (_, i) => i + 1).reduce(
          (acc, el) => acc * el,
          1
        ),
      ];
    }, [])
    .reduce((acc, el) => acc + el) == n
    ? 'STRONG!!!!'
    : 'Not Strong !!';
  //////////////////////////////////////!SECTION
  //   return [...`${n}`].reduce(
  //     (pre, val) =>
  //       pre +
  //       [...Array(+val)].reduce((factorial, _, idx) => factorial * ++idx, 1),
  //     0
  //   ) === n
  //     ? `STRONG!!!!`
  //     : `Not Strong !!`;
}

console.log(strong(1)); //"STRONG!!!!"
console.log(strong(2)); //"STRONG!!!!"
console.log(strong(145)); //"STRONG!!!!"
console.log(strong(7)); //"Not Strong !!"
console.log(strong(93)); //"Not Strong !!"
console.log(strong(185)); //"Not Strong !!"
console.log(strong(40585)); //"STRONG!!!!"
