/*
Description:
Description:

Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
Rules:

    Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
    Strings will consist of uppercase letters only
    Only two groups to a fight.
    Group whose total power (A + B + C + ...) is bigger wins.
    If the powers are equal, it's a tie.

Examples:

      * "ONE", "TWO"  -> "TWO"`
      * "ONE", "NEO"  -> "Tie!"

*/
function battle(x, y) {
  const alphabetLength = 26;
  const ASCIICodeOfA = 65;

  const alphabet = Array.from({ length: alphabetLength }, (_, i) =>
    String.fromCharCode(ASCIICodeOfA + i)
  );

  const result1 = [...x]
    .map((char) => alphabet.indexOf(char) + 1)
    .reduce((acc, el) => acc + el, 0);
  const result2 = [...y]
    .map((char) => alphabet.indexOf(char) + 1)
    .reduce((acc, el) => acc + el, 0);

  return result1 > result2 ? x : result2 > result1 ? y : 'Tie!';
  //////////////////////////////////////!SECTION
  //   const score = (s) => [...s].reduce((a, c) => a + c.charCodeAt(0) - 64, 0);
  //   const [a, b] = [score(x), score(y)];

  //   return a > b ? x : b > a ? y : 'Tie!';
}

console.log(battle('AAA', 'Z')); //"Z"
console.log(battle('ONE', 'TWO')); //"TWO"
console.log(battle('ONE', 'NEO')); //"Tie!"
console.log(battle('FOUR', 'FIVE')); //"FOUR"
