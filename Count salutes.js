/*
Description:
Description
There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

Input
People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

Examples
Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs.
*/
function countSalutes(hallway) {
  let count = 0,
    right = 0;
  const arr = [...hallway.replace(/[-]/g, '')];

  while (arr[0] == '<') {
    arr.shift();
  }

  while (arr.at(-1) == '>') {
    arr.pop();
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '>') {
      right += 1;
    } else {
      count += 2 * right;
    }
  }

  return count;
  //////////////////////////////////////////!SECTION
  //   let salutes = 0;
  //   for (let i = 0; i < hallway.length; i++) {
  //     if (hallway[i] === '>') {
  //       salutes += hallway.slice(i).replace(/[^<]/g, '').length * 2;
  //     }
  //   }
  //   return salutes;
  //////////////////////////////////////////!SECTION
  //   return (
  //     hallway.replace(/>(?=(.*))|.()/g, '$1$2').replace(/[^<]/g, '').length * 2
  //   );
  //////////////////////////////////////////!SECTION
  //   let right = 0;

  //   return (
  //     hallway.split``
  //       .map((el) => {
  //         switch (el) {
  //           case '<':
  //             return right;
  //           case '>':
  //             right++;
  //           default:
  //             return 0;
  //         }
  //       })
  //       .reduce((acc, el) => acc + el) * 2
  //   );
  //////////////////////////////////////////!SECTION
  //   return [...hallway].reduce(
  //     (salutes, dir, id) =>
  //       dir === '>'
  //         ? salutes +
  //           [...hallway].filter((c, i) => c === '<' && i > id).length * 2
  //         : salutes,
  //     0
  //   );
  //////////////////////////////////////////!SECTION
  //   return (
  //     hallway
  //       .split('')
  //       .reduce(
  //         (acc, el, i) =>
  //           acc + (el == '>' ? hallway.slice(i).split('<').length - 1 : 0),
  //         0
  //       ) * 2
  //   );
}

console.log(countSalutes('<---->---<---<-->')); //4
console.log(countSalutes('------')); //0
console.log(countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->')); //42
console.log(countSalutes('<<----<>---<')); //2
console.log(countSalutes('>')); //0
console.log(
  countSalutes(
    '-><<<<-<>>><<>><<>>><--->--<-<-<>-><>->-<-><--->--<->->--<><--<<'
  )
); //392
