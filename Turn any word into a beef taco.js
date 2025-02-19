/*
Description:
If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

NOTE
We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.
*/
function tacofy(word) {
  const result = word
    .toLowerCase()
    .replace(
      /./g,
      (el) =>
        ({
          t: 'tomato ',
          l: 'lettuce ',
          c: 'cheese ',
          g: 'guacamole ',
          s: 'salsa ',
          a: 'beef ',
          e: 'beef ',
          i: 'beef ',
          o: 'beef ',
          u: 'beef ',
        }[el] || '')
    )
    .trim();
  return ['shell', ...result.split` `, 'shell'].filter(Boolean);
  //////////////////////////////////////////////////////!SECTION
  //   const map = {
  //     t: 'tomato',
  //     l: 'lettuce',
  //     c: 'cheese',
  //     g: 'guacamole',
  //     s: 'salsa',
  //   };
  //   const vowels = 'aeiou';

  //   return [
  //     'shell',
  //     ...[...word.toLowerCase()]
  //       .map((x) => (vowels.includes(x) ? 'beef' : map[x]))
  //       .filter((x) => x),
  //     'shell',
  //   ];
}
//////////////////////////////////////////////////////!SECTION
// const tacofy = (word) =>
//   ((obj) => [
//     `shell`,
//     ...[...word.toLowerCase().replace(/[^aeioutlcgs]/g, ``)].map(
//       (val) => obj[val] || `beef`
//     ),
//     `shell`,
//   ])({ t: `tomato`, l: `lettuce`, c: `cheese`, g: `guacamole`, s: `salsa` });

console.log(tacofy('')); //['shell', 'shell']
console.log(tacofy('a')); //['shell', 'beef', 'shell']
console.log(tacofy('ggg')); //['shell', 'guacamole', 'guacamole', 'guacamole', 'shell']
console.log(tacofy('ogl')); //['shell', 'beef', 'guacamole', 'lettuce', 'shell']
console.log(tacofy('ydjkpwqrzto')); //['shell', 'tomato', 'beef', 'shell']
