/*
Description:
Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
More examples in test cases.
*/
function solve(eq) {
  const result = eq.match(/[+-/*]/g).join``.split(',');
  const resultReverse = result.join``.split``.reverse();

  return eq
    .split(/[+-/*]/g)
    .reverse()
    .map((el, i) => el + (resultReverse[i] || '')).join``;
  //////////////////////////////////////////////!SECTION
  //   return eq.match(/\w+|[*+/-]/g).reverse``.join``;
  //////////////////////////////////////////////!SECTION
  //   return eq
  //     .split(/([-+*/])/)
  //     .reverse()
  //     .join(``);
}

console.log(solve('100*b/y')); //"y/b*100"
console.log(solve('a+b-c/d*30')); //"30*d/c-b+a"
console.log(solve('a*b/c+50')); //"50+c/b*a"
