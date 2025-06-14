/*
Description:
Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to its location.

Given a map:

..........
..........
..........
.......X..
..........
..........
The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

In this example:

findSpaceship(map) => [7, 2]
If you cannot find the spaceship, the result should be

"Spaceship lost forever."
Can you help ALF?
*/
function findSpaceship(map) {
  const result = map?.split('\n');

  const firstIndex = result?.filter((el) => el.includes('X'))[0]?.indexOf('X');

  const secondIndex = result
    ?.reverse()
    .map((el, i) => (el.includes('X') ? i : 'nope'))
    .filter((el) => el !== 'nope')[0];

  if (!result?.some((el) => el.includes('X'))) {
    return 'Spaceship lost forever.';
  }

  return firstIndex >= 0 && secondIndex >= 0
    ? [firstIndex, secondIndex]
    : 'Spaceship lost forever.';
}
////////////////////////////////////////////!SECTION
// const findSpaceship = (map) =>
//   map && map.includes(`X`)
//     ? map
//         .split(`\n`)
//         .reverse()
//         .reduce(
//           (pre, val, idx) =>
//             val.includes(`X`) ? (pre = [val.indexOf('X'), idx]) : pre,
//           []
//         )
//     : `Spaceship lost forever.`;

console.log(
  findSpaceship('..........\n..........\n.......X..\n..........\n..........')
); //[7, 2]
console.log(findSpaceship('.......\nX.......')); //[0, 0]
console.log(findSpaceship('........................')); //'Spaceship lost forever.'
console.log(findSpaceship()); //'Spaceship lost forever.'
console.log(findSpaceship('X')); //[0, 0]
console.log(findSpaceship('....\n....\n....\n.X..\n....')); //[1, 1]
console.log(findSpaceship('..X.')); //[2, 0]
