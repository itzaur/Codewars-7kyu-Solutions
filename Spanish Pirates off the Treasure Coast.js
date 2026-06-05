/*
Description:

The Spanish King wants to bring gold back to the empire. The first step is finding pirates and the gold in the new world.
*/
function secretMap(sp) {
  const pirates = sp.reduce(
    (acc, el) => acc + el.filter((el) => el === 'pirate').length,
    0,
  );
  const goldPiles = sp.reduce(
    (acc, el) => acc + el.filter((el) => el === 'pile_of_gold').length,
    0,
  );

  return `count of pirates: ${pirates} and the count of gold piles: ${goldPiles}`;
  //////////////////////////////////////!SECTION
  //   const { pirate, pile_of_gold } = sp.reduce(
  //     (acc, [str]) => (acc[str]++, acc),
  //     { pirate: 0, pile_of_gold: 0 },
  //   );

  //   return `count of pirates: ${pirate} and the count of gold piles: ${pile_of_gold}`;
}

let map = [
  ['spain'],
  [],
  [],
  [],
  ['pirate'],
  ['pirate'],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  ['pirate'],
  [],
  ['pirate'],
  ['pirate'],
  [],
  [],
  [],
  [],
  ['pirate'],
  ['pirate'],
  [],
  [],
  [],
  ['pile_of_gold'],
  [],
  [],
  [],
  [],
  [],
  ['pile_of_gold'],
  ['pirate'],
  [],
];
console.log(secretMap(map)); //"count of pirates: 8 and the count of gold piles: 2"
