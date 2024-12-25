/*
Description:
Reducing Problems - Bug Fixing #8
Oh no! Timmy's reduce is causing problems, Timmy's goal is to calculate the two teams scores and return the winner but timmy has gotten confused and sometimes teams don't enter their scores, total the scores out of 3! Help timmy fix his program!

Return true if team 1 wins or false if team 2 wins!
*/
function calculateTotal(team1, team2) {
  const reducer = (team) => team.reduce((acc, el) => acc + el, 0);

  return reducer(team1) > reducer(team2);
}

console.log(calculateTotal([1, 2, 2], [1, 0, 0])); //true
console.log(calculateTotal([6, 45, 1], [1, 55, 0])); //false
console.log(calculateTotal([57, 2, 1], [])); //true
console.log(calculateTotal([], [3, 4, 3])); //false
