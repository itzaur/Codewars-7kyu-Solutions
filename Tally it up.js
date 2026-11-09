/*
Description:

I'm creating a scoreboard on my game website, but I want the score to be displayed as tally marks instead of Roman numerals. Write a function that translates the numeric score into tally marks.

My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively. I want a space and line break ( ) after each completed tally (5).

Assume that the score you receive will be an integer. This function should return an HTML string that I can insert into my website that represents the correct score.
*/
var scoreToTally = function (score) {
  const options = ['a', 'b', 'c', 'd', 'e'];

  return (
    Array.from({ length: ~~(score / 5) }, () => 'e <br>').join`` +
    (score % 5 ? options[(score % 5) - 1] : ``)
  );
};
////////////////////////////////////!SECTION
// scoreToTally = (score) =>
//   'e <br>'.repeat((score / 5) | 0) + ['', 'a', 'b', 'c', 'd'][score % 5];

console.log(scoreToTally(3)); //'c'
console.log(scoreToTally(10)); //'e <br>e <br>'
console.log(scoreToTally(9)); //'e <br>d'
