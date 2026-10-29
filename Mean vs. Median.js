/*
Description:

Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

    'mean' - in case mean value is larger than median value
    'median' - in case median value is larger than mean value
    'same' - in case both mean and median share the same value

Reminder: Median

Array will always be valid (odd-length >= 3)
*/
function meanVsMedian(numbers) {
  const sortedArray = [...numbers].sort((a, b) => a - b);
  const mean = numbers.reduce((acc, el) => acc + el, 0) / numbers.length;
  const median = sortedArray[~~(numbers.length / 2)];

  switch (true) {
    case mean > median:
      return 'mean';
    case mean < median:
      return 'median';
    default:
      return 'same';
  }
}
//////////////////////////////////////////////!SECTION
const meanVsMedian = (numbers) =>
  ((val) => (val > 0 ? `mean` : val ? `median` : `same`))(
    numbers.reduce((pre, val) => pre + val) / numbers.length -
      numbers.sort((a, b) => a - b)[(numbers.length / 2) | 0],
  );

console.log(meanVsMedian([1, 1, 1])); //'same'
console.log(meanVsMedian([1, 2, 37])); //'mean'
console.log(meanVsMedian([7, 14, -70])); //'median'
console.log(meanVsMedian([1, 3, 3, 6, 7, 8, 9])); //'median'
