/*
DESCRIPTION:
Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter so there will only be a single match for each element.
*/
function sortArray(a1, a2) {
  const letters = a1.map((el) => el[0]);

  return letters.map((el) => a2.find((item) => item[0] === el));
  ////////////////////////////////////!SECTION
  //   return a1.map((s1) => a2.find((s2) => s1[0] === s2[0]));
  ////////////////////////////////////!SECTION
  //   let newArr = [];

  //   for (let i = 0; i < a1.length; i++) {
  //     for (let j = 0; j < a2.length; j++) {
  //       if (a2[j][0] === a1[i][0]) newArr.push(a2[j]);
  //     }
  //   }

  //   return newArr;
  ////////////////////////////////////!SECTION
  //   a1 = a1.map((e) => e[0]).join('');
  //   return a2.sort((a, b) => a1.indexOf(a[0]) > a1.indexOf(b[0]));
  ////////////////////////////////////!SECTION
  //   const lookup = {};

  //   for (const w of a2) {
  //     lookup[w[0]] = w;
  //   }

  //   return a1.map((w) => lookup[w[0]]);
  ////////////////////////////////////!SECTION
  //   return [...a2].sort(
  //     ([a0], [b0]) =>
  //       a1.findIndex(([an0]) => an0 === a0) - a1.findIndex(([an0]) => an0 === b0)
  //   );
  ////////////////////////////////////!SECTION
  //   let indices = a1.reduce((acc, curr, i) => ((acc[curr[0]] = i), acc), {});

  //   return a2.sort((a, b) => indices[a[0]] - indices[b[0]]);
  ////////////////////////////////////!SECTION
  //   const letters = { ...a1.map((el) => el[0]) };
  //   const indices = Object.fromEntries(
  //     Object.entries(letters).map(([key, value]) => [value, key])
  //   );

  //   return a2.sort((a, b) => indices[a[0]] - indices[b[0]]);
  ////////////////////////////////////!SECTION
  //   const letters = a1.map((x) => x[0]);
  //   return a2.sort((a, b) => letters.indexOf(a[0]) - letters.indexOf(b[0]));
}

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
console.log(sortArray(a1, a2)); //['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
console.log(sortArray(a1, a2)); //['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

var a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
var a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
console.log(sortArray(a1, a2)); //['narwhal', 'llama', 'sloth', 'tortoise', 'raven']
