/*
Description:
Find and return second largest unique number in given Array.

Array may contain values of any data type. Ignore everything except numbers and strings, which may be converted to numbers.

If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.

Examples
secondLargest([1, -2, 3]) = 1;
secondLargest([5, 5, 4]) = 4;
secondLargest([2, '3', 4]) = 3;
Should return
// 1. Passed value not an Array:
secondLargest("1 2 3") = undefined;

// 2. There is no second largest:
secondLargest([2, 2, 2]) = undefined;

// 3. Ignore everything except:
//   * numbers
//   * not-NaN strings:
secondLargest(['-1', 2, null, false]) = -1;
Input range
Numbers are safe Integers.
Not-NaN strings represent safe Integers.
*/
function secondLargest(array) {
  return Array.isArray(array) && new Set(array).size > 1
    ? array
        .map((el) =>
          (typeof el === 'string' && el == +el) || typeof el === 'number'
            ? +el
            : undefined
        )
        .sort((a, b) => b - a)[1]
    : undefined;
  ////////////////////////////////////////!SECTION
  // return Array.isArray(array)
  //   ? [
  //       ...new Set(array.filter((val) => !isNaN(parseInt(val))).map(Number)),
  //     ].sort((a, b) => b - a)[1]
  //   : undefined;
}

console.log(secondLargest([-32, 11, 43, 55, 0, 11])); //43
console.log(secondLargest(null)); //undefined
console.log(secondLargest([5, 5, 5, 5, 5, 5])); //undefined
console.log(secondLargest([0, 1, '2', 3])); //2
console.log(secondLargest(['-1', 2, null, false])); //-1
