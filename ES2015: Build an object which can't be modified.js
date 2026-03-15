/*
Description:

Declare an variable which name is stone that cant't be modified.

The initial value of stone is under below.

{
  feature: 'earth',
  style: {
    color: 'black'
  }
}
*/
var stone = {
  feature: 'earth',
  style: {
    color: 'black',
  },
};
Object.freeze(stone);
Object.freeze(stone.style);
//////////////////////////////////////!SECTION
// let stone = Object.freeze({
//   feature: 'earth',
//   style: Object.freeze({ color: 'black' }),
// });

console.log(stone, { feature: 'earth', style: { color: 'black' } });
stone.feature = 'water';
stone.style.color = 'white';
console.log(stone.feature); //'earth'
console.log(stone.style.color); //'black'
