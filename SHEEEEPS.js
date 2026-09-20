/*
Description:

HI! You have the array of sheeps:

['sheep', 'sheep', 'sheep', 'sheep'...]

But somebody is "sick":

['shpee', 'sheep', 'hspee', 'sheep', 'pehes'...]

You can help them:

shpee => sheep

pehes => sheep

Because shpee and pehes have 1 s, 1 h, 2 e, 1 p.

shep !=> sheep

And:

sheeep !=> sheep

return array(list) with "sheep". if you can't help - delete.
Hard register!!!

A!==a
Example:

ShEep !=> sheep

EXAMPLE:
['sheep', 'Shpee', 'pEhEs', 'PPh', 'heep', 'phees']

return:
['sheep', 'sheep']

Good luck!!!
*/
function reloadSheeps(arr) {
  return arr.reduce((acc, el) => {
    const sortedEl = el.split``.sort().join``;
    if (sortedEl === 'eehps') {
      acc.push('sheep');
    }
    return acc;
  }, []);
}
////////////////////////////////////!SECTION
// reloadSheeps = (s) =>
//   s.filter((e) => [...e].sort() == 'e,e,h,p,s').fill('sheep');

console.log(reloadSheeps(['sheep', 'sheep', 'sheep'])); //['sheep', 'sheep', 'sheep']
console.log(reloadSheeps([])); //[]
console.log(reloadSheeps(['shpee', 'pehes', 'pseeh', 'epshe'])); //['sheep', 'sheep', 'sheep', 'sheep']
console.log(reloadSheeps(['p', 'ph', 'shep', 'phe'])); //[]
console.log(reloadSheeps(['pe', 'hehe', 'heeps', 'eee', 'ti', 'peehs'])); //['sheep', 'sheep']
console.log(
  reloadSheeps(['Sheep', 'EPhes', 'PEHES', 'ShEep', 'sHeep', 'PSeEH']),
); //[]
console.log(reloadSheeps(['Sheep', 'sHeep', 'shEep', 'phsee'])); //['sheep']
