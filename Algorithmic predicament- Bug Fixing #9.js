/*
Description:
Algorithmic predicament - Bug Fixing #9
Oh no! Timmy's algorithm has gone wrong! Help Timmy fix his algorithm!

Task
Your task is to fix Timmy's algorithm so it returns the group name with the highest total age.

You will receive two groups of `people` objects, with two properties `name` and `age`. The name property is a string, and the age property is a number.

Your goal is to calculate the total age of all people with the same name in both groups and return the name of the person with the highest total age. If two names have the same total age, return the first alphabetical name.
*/
function highestAge(group1, group2) {
  const array = [...group1, ...group2];
  const key = 'name';

  const result = Object.values(
    array.reduce((acc, el) => {
      acc[el[key]] ??= { [key]: el[key] };

      Object.keys(el)
        .filter((item) => item !== key)
        .forEach(
          (item) => (acc[el[key]][item] = (acc[el[key]][item] || 0) + el[item])
        );

      return acc;
    }, {})
  ).sort((a, b) => b['age'] - a['age']);

  return result.reduce((acc, el) => {
    return acc.age > el.age ? acc : el;
  }, 0).name;
  ////////////////////////////////////////////////////////!SECTION
  //   let ages = group1.concat(group2).reduce((acc, el) => {
  //     acc[el.name] = (acc[el.name] || 0) + el.age;
  //     return acc;
  //   }, {});

  //   return Object.keys(ages)
  //     .map((v) => {
  //       return { n: v, a: ages[v] };
  //     })
  //     .sort((a, b) => (a.a != b.a ? b.a - a.a : a.n.localeCompare(b.n)))[0].n;
  ////////////////////////////////////////////////////////!SECTION
  //   let sum = Array.from(
  //     group1
  //       .concat(group2)
  //       .reduce(
  //         (total, { name, age }) => total.set(name, (total.get(name) || 0) + age),
  //         new Map()
  //       ),
  //     ([name, age]) => ({ name, age })
  //   );
  //   sum.sort((a, b) => b.age - a.age || a.name > b.name);
  //   return sum[0].name;
}

console.log(
  highestAge(
    [
      { name: 'kay', age: 1 },
      { name: 'john', age: 13 },
      { name: 'kay', age: 76 },
    ],
    [
      { name: 'john', age: 1 },
      { name: 'alice', age: 77 },
    ]
  )
); //'alice'
console.log(
  highestAge(
    [
      { name: 'kay', age: 1 },
      { name: 'john', age: 13 },
      { name: 'kay', age: 76 },
    ],
    [
      { name: 'john', age: 1 },
      { name: 'alice', age: 76 },
    ]
  )
); //'kay'
console.log(
  highestAge(
    [
      { name: 'kay', age: 1 },
      { name: 'john', age: 130 },
      { name: 'kay', age: 76 },
    ],
    [
      { name: 'john', age: 1 },
      { name: 'alice', age: 76 },
    ]
  )
); //'john'
