/*
Description:

In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

For example: Input structure:

[
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
]

Output should be:

[
  {
    name: "Bob",
    points: 130,
    position: 1,
  },
  {
    name: "Kate",
    points: 120,
    position: 2,
  },
  {
    name: "Mary",
    points: 120,
    position: 2,
  },
  {
    name: "John",
    points: 100,
    position: 4,
  },
]
*/
function ranking(people) {
  const sortedPeople = [...people].sort((a, b) => {
    return b.points - a.points || a.name.localeCompare(b.name);
  });

  return sortedPeople.reduce((acc, person, i) => {
    return [
      ...acc,
      {
        ...person,
        position:
          i > 0 && person.points === sortedPeople[i - 1].points
            ? acc[i - 1].position
            : i + 1,
      },
    ];
  }, []);
  //////////////////////////////////////////!SECTION
  //   return (
  //     a
  //       .sort((x, y) => y.points - x.points || x.name.localeCompare(y.name))
  //       .forEach(
  //         (x, i) =>
  //           (x.position =
  //             !i || x.points < a[i - 1].points ? i + 1 : a[i - 1].position),
  //       ),
  //     a
  //   );
}
//////////////////////////////////////////!SECTION
// const ranking = (people) =>
//   people
//     .sort((a, b) => b.points - a.points || a.name.localeCompare(b.name))
//     .reduce(
//       (pre, val, idx) =>
//         pre.concat({
//           ...val,
//           position:
//             idx && val.points === pre[idx - 1].points
//               ? pre[--idx].position
//               : ++idx,
//         }),
//       [],
//     );

const input = [
  {
    name: 'John',
    points: 100,
  },
];

const output = [
  {
    name: 'John',
    points: 100,
    position: 1,
  },
];

console.log(ranking(input));
