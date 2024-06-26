/*
DESCRIPTION:
Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

Example: countMe('1123') (count_me in Ruby)

Here 1 comes twice so <count><integer> will be "21"
then 2 comes once so <count><integer> will be "12"
then 3 comes once so <count><integer> will be "13"
hence output string will be "211213".

Similarly countMe('211213') will return '1221121113' (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings
*/
function countMe(data) {
  const array = [];
  let count = 1;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i + 1]) {
      count++;
    } else {
      array.push([data[i], count]);
      count = 1;
    }
  }

  const result = array.map(([a, b]) => [b, a]).join``.split`,`.join``;

  return +data ? result : '';
  ////////////////////////////!SECTION
  // return /[^0-9]/.test(s) ? '' : s.replace(/(.)\1*/g, (n, m) => n.length + m);
}

console.log(countMe('1123')); //'211213'
console.log(countMe('1')); //'11
console.log(countMe('11')); //'21
console.log(countMe('a')); //''
console.log(countMe('a123')); //''
console.log(countMe('21')); //'1211'
console.log(countMe('1211')); //'111221'
console.log(countMe('12322212223443')); //'111213321132132413'
console.log(countMe('')); //''
console.log(countMe('123a')); //''
