/*
Description:
Task

Given an integer array arr. Your task is to remove one element, maximize the product of elements.

The result is the element which should be removed. If more than one valid results exist, return the smallest one.
Input/Output

[input] integer array arr

non-empty unsorted integer array. It contains positive integer, negative integer or zero.

3 ≤ arr.length ≤ 15

-10 ≤ arr[i] ≤ 10

[output] an integer

The element that should be removed.
Example

For arr = [1, 2, 3], the output should be 1.

For arr = [-1, 2, -3], the output should be 2.

For arr = [-1, -2, -3], the output should be -1.

For arr = [-1, -2, -3, -4], the output should be -4.
*/
function maximumProduct(arr) {
  const result = arr.reduce(
    (acc, _, i) => {
      const product = arr.reduce((acc, el, j) => (i === j ? acc : acc * el), 1);

      if (
        product > acc.product ||
        (product === acc.product && arr[i] < acc.element)
      ) {
        return { product, element: arr[i] };
      }

      return acc;
    },
    { product: -Infinity, element: Infinity },
  );

  return result.element;
  ////////////////////////////////////!SECTION
  //   const prods = arr.map((_, i) =>
  //     arr.reduce((a, c, j) => (j == i ? a : a * c), 1),
  //   );
  //   const max = Math.max(...prods);

  //   return max == 0 ? Math.min(...arr) : arr[prods.indexOf(max)];
}

console.log(maximumProduct([1, 2, 3])); //1
console.log(maximumProduct([-1, 2, -3])); //2
console.log(maximumProduct([-1, -2, -3])); //-1
console.log(maximumProduct([-1, -2, -3, -4])); //-4
console.log(maximumProduct([0, -1, -2, -3, 4])); //-3
