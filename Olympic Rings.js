/*
Description:
To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.
*/
function olympicRing(a) {
  const options = {
    a: 1,
    A: 1,
    b: 1,
    B: 2,
    d: 1,
    D: 1,
    e: 1,
    g: 1,
    o: 1,
    O: 1,
    p: 1,
    P: 1,
    q: 1,
    Q: 1,
    R: 1,
  };

  const result = ~~(
    a.replace(/[a-zA-Z]/g, (el) => options[el] || 0).split``.reduce(
      (acc, el) => acc + +el,
      0
    ) / 2
  );

  switch (true) {
    case result <= 1:
      return 'Not even a medal!';
    case result === 2:
      return 'Bronze!';
    case result === 3:
      return 'Silver!';
    default:
      return 'Gold!';
  }
  ////////////////////////////////////////////!SECTION
  //   const out =
  //     [...str]
  //       .map((el) => ('qeopadgbQROPAD'.includes(el) ? 1 : el === 'B' ? 2 : 0))
  //       .reduce((a, b) => a + b, 0) / 2;

  //   return out < 2
  //     ? 'Not even a medal!'
  //     : out < 3
  //     ? 'Bronze!'
  //     : out < 4
  //     ? 'Silver!'
  //     : 'Gold!';
}

console.log(olympicRing('wHjMudLwtoPGocnJ')); //'Bronze!'
console.log(olympicRing('eCEHWEPwwnvzMicyaRjk')); //'Bronze!'
console.log(olympicRing('JKniLfLW')); //'Not even a medal!'
