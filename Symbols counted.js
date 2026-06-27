/*
Description:

In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

Example: abbreviation => a2b2revi2ton
*/
const transform = (s) => {
  const occurrences = [...s].reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return [...new Set(s)].map((el) =>
    occurrences[el] > 1 ? el + occurrences[el] : el,
  ).join``;
};

console.log(transform('elevation')); //'e2lvation'
console.log(transform('transplantology')); //'t2ra2n2spl2o2gy'
console.log(transform('economics')); //'ec2o2nmis'
console.log(transform('embarrassed')); //'e2mba2r2s2d'
console.log(transform('impressive')); //'i2mpre2s2v'
