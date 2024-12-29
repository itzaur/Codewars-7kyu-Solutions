/*
Description:
No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]
*/
function equalize(array) {
  const key = array[0];

  return array
    .map((el) => (el > key ? `+${el - key}` : `${el - key}`))
    .map((el) => (el === '0' ? '+0' : el));
  //////////////////////////////////////////!SECTION
  //   return array.map((val) => `+${val - array[0]}`.replace(`+-`, `-`));
}

console.log(equalize([20, 30, 35, 10])); //["+0","+10","+15","-10"]
console.log(equalize([])); //[]
console.log(equalize([10, 12, 24, 50, 0, 15, 20])); //["+0","+2","+14","+40","-10","+5","+10"]
