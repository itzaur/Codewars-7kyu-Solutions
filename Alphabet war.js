/*
Description:
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/
function alphabetWar(fight) {
  const leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  const occurrences = [...fight].reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  const leftSideResult = Object.entries(leftSide)
    .map(([key, value]) => occurrences[key] * value)
    .filter(Number)
    .reduce((acc, el) => acc + el, 0);
  const rightSideResult = Object.entries(rightSide)
    .map(([key, value]) => occurrences[key] * value)
    .filter(Number)
    .reduce((acc, el) => acc + el, 0);

  return leftSideResult === rightSideResult
    ? `Let's fight again!`
    : leftSideResult > rightSideResult
    ? 'Left side wins!'
    : 'Right side wins!';
  //////////////////////////////////////!SECTION
  //   let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };

  //   let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);

  //   return result
  //     ? (result < 0 ? 'Left' : 'Right') + ' side wins!'
  //     : "Let's fight again!";
  //////////////////////////////////////!SECTION
  //   return ['Right side wins!', "Let's fight again!", 'Left side wins!'][
  //     Math.sign(
  //       [...fight].reduce(
  //         (r, cv) => r + 'sbpw'.indexOf(cv) - 'zdqm'.indexOf(cv),
  //         0
  //       )
  //     ) + 1
  //   ];
  //////////////////////////////////////!SECTION
  //   const dict = { m: 4, q: 3, d: 2, z: 1, w: -4, p: -3, b: -2, s: -1 };
  //   const sum = [...fight].reduce((x, y) => x + (y in dict ? dict[y] : 0), 0);

  //   return sum > 0
  //     ? 'Right side wins!'
  //     : sum < 0
  //     ? 'Left side wins!'
  //     : "Let's fight again!";
}

console.log(alphabetWar('z')); //"Right side wins!"
console.log(alphabetWar('zdqmwpbs')); //"Let's fight again!"
console.log(alphabetWar('zzzzs')); //"Right side wins!"
console.log(alphabetWar('wwwwww')); //"Left side wins!"
