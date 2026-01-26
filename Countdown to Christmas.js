/*
Description:

Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.

The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.

Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.

Watch out for leap years!
*/
function daysUntilChristmas(days) {
  const year = days.getFullYear();
  const christmasDate = new Date(year, 11, 25);
  const nextChristmasDate = new Date(year + 1, 11, 25);

  let diffTime = christmasDate - days;

  if (days > christmasDate) {
    diffTime = nextChristmasDate - days;
  }

  return ~~(diffTime / (1000 * 60 * 60 * 24));
}

console.log(daysUntilChristmas(new Date(2016, 11, 9))); //16
console.log(daysUntilChristmas(new Date(2016, 11, 8))); //17
console.log(daysUntilChristmas(new Date(1996, 11, 7))); //18
console.log(daysUntilChristmas(new Date(2015, 1, 23))); //305
console.log(daysUntilChristmas(new Date(2001, 6, 11))); //167
console.log(daysUntilChristmas(new Date(2000, 11, 9))); //16
console.log(daysUntilChristmas(new Date(1978, 2, 18))); //282
console.log(daysUntilChristmas(new Date(2016, 11, 25))); //0
console.log(daysUntilChristmas(new Date(2016, 11, 26))); //364
console.log(daysUntilChristmas(new Date(2015, 11, 26))); //365
