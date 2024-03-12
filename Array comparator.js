/*
DESCRIPTION:
You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.
*/
const matchArrays = (v, r) => v.filter((el) => r.includes(el)).length;
//////////////!SECTION
// const matchArrays = (v, r) => v.filter(e => r.indexOf(e) != -1).length;
//////////////!SECTION
// const matchArrays = (v, r) => v.reduce((pre, val) => pre + r.includes(val), 0);

console.log(
  matchArrays(['Perl', 'Closure', 'JavaScript'], ['Go', 'C++', 'Erlang'])
); //0
console.log(
  matchArrays(
    ['incapsulation', 'OOP', 'array'],
    ['time', 'propert', 'paralelism', 'OOP']
  )
); //1
console.log(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6])); //4
