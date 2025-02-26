/*
Description:
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/
function spacey(array) {
  return array.reduce((acc, el) => [...acc, (acc + el).split`,`.at(-1)], []);
  ////////////////////////////////////!SECTION
  // let string = '';

  // return array.map((e) => (string += e));
  ////////////////////////////////////!SECTION
  // return array.map((_, idx) => array.slice(0, ++idx).join(``));
}

console.log(spacey(['kevin', 'has', 'no', 'space'])); //['kevin','kevinhas','kevinhasno','kevinhasnospace']
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes'])); //['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']
