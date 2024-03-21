/*
DESCRIPTION:
Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _
*/
function howManyGifts(maxBudget, gifts) {
  const sortedGifts = gifts.sort((a, b) => a - b);
  const result = [];

  sortedGifts.reduce((acc, el) => {
    if (acc + el > maxBudget) return acc;
    result.push(acc + el);

    return acc + el;
  }, 0);

  return result.length;
  //////////////!SECTION
  //   return gifts.sort((a, b) => a - b).filter((el) => (maxBudget -= el) >= 0).length;
  //////////////!SECTION
  //   return gifts
  //     .sort((a, b) => a - b)
  //     .reduce((acc, el) => {
  //       return (maxBudget -= el) >= 0 ? ++acc : acc;
  //     }, 0);
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1])); //4
console.log(howManyGifts(0, [1])); //0
console.log(howManyGifts(90, [87, 3, 5, 25, 1, 3, 4, 6, 20])); //8
console.log(
  howManyGifts(
    6523,
    [
      160, 233, 341, 507, 977, 1192, 1337, 1648, 1671, 2065, 2074, 2183, 2252,
      2273, 2311, 2355, 2421, 2433, 2494, 2531, 3040, 3106, 3210, 3221, 4035,
      4272, 4321, 5032, 5441, 5913, 6117, 6368, 6445, 6454, 6693, 6789, 7403,
      7423, 7460, 7660, 7880, 8310, 8377, 9140, 9168, 9203, 9246, 9858,
    ]
  )
); //8
