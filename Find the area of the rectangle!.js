/*
DESCRIPTION:
Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

This kata is meant for beginners. Rank and upvote to bring it out of beta!
*/
function area(d, l) {
  const result = l * Math.sqrt(d ** 2 - l ** 2);

  return d < l
    ? `Not a rectangle`
    : Number.isInteger(result)
    ? result
    : +result.toFixed(2);
}

console.log(area(5, 4)); //12
console.log(area(10, 6)); //48
console.log(area(13, 5)); //60
console.log(area(12, 5)); //54.54
