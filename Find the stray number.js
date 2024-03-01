/*
DESCRIPTION:
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
function stray(numbers) {
  const occurrences = numbers.reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return +numbers.filter((el) => occurrences[el] === 1);
  ////////////!SECTION
  //   return numbers.reduce((acc, el) => acc ^ el);
  ////////////!SECTION
  //   return numbers.find(
  //     (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
  //   );
  ////////////!SECTION
  //   const max = Math.max(...numbers);
  //   const min = Math.min(...numbers);
  //   return numbers.filter((el) => el == max).length == 1 ? max : min;
}

console.log(stray([1, 1, 2])); //2
console.log(stray([1, 2, 1])); //2
console.log(stray([2, 1, 1])); //2
