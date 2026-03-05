/*
Description:

Write a function which maps a function over the lists in a list:

function gridMap(fn,xss) { return [[]]; }

Example 1:

const xss = [ [1,2,3]
            , [4,5,6]
            ];

gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]

Example 2

const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]
*/
function gridMap(fn, a) {
  return a.map((el) => el.map((x) => fn(x)));
  ////////////////////////////////!SECTION
  //   return a.map((x) => x.map(fn));
}

const numberGrid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [0, 2, 4],
];
console.log(gridMap((x) => x + 1, numberGrid)); //[[2,3,4,5],[6,7,8,9,10],[1,3,5]]
console.log(gridMap((x) => x * 2, numberGrid)); //[[2,4,6,8],[10,12,14,16,18],[0,4,8]]
console.log(gridMap((x) => x ** 2, numberGrid)); //[[1,4,9,16],[25,36,49,64,81],[0,4,16]]
const charGrid = [
  ['H', 'e', 'l', 'l', 'o'],
  ['W', 'o', 'r', 'l', 'd', '!'],
];
console.log(gridMap((x) => x.toUpperCase(), charGrid)); //[['H','E','L','L','O'],['W','O','R','L','D','!']]
console.log(gridMap((x) => x.toLowerCase(), charGrid)); //[['h','e','l','l','o'],['w','o','r','l','d','!']]
