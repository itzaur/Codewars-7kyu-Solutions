/*
Description:

My roommate and I occasionally make wagers on if we can beat each other in Super Smash Bros. Being the competitor I am, I can't take a loss without getting a chance at redemption. Often times, this manifests in the form of a "Double or nothing" bet. Rather than paying up, the wager will instead be doubled, and an additional round will be played.

...This consistently results in me losing more money than I initially wagered.

Given the amount of cash on hand, the initial wager, and the number of rounds played, return the amount of money that I'll have left after our gam(bl)ing session has concluded.

If I can't afford to pay up, return "I'll pay you back later" instead ;)
*/
function doubleOrNothing(cash, wager, losses) {
  const result = cash - wager * 2 ** (losses - 1);

  return result >= 0 ? result : "I'll pay you back later";
}

console.log(doubleOrNothing(12, 2, 3)); //4
console.log(doubleOrNothing(1124, 2, 10)); //100
console.log(doubleOrNothing(45, 1, 7)); //"I'll pay you back later"
