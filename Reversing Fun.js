/*
Description:
You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

Let's say you start with this: "012345"

The first thing you do is reverse it:"543210"
Then you will take the string from the 1st position and reverse it again:"501234"
Then you will take the string from the 2nd position and reverse it again:"504321"
Then you will take the string from the 3rd position and reverse it again:"504123"

Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"

Input:
A string of length 1 - 1000

Output:
A correctly reordered string.
*/
function flipNumber(n) {
  const arr = [...n].reverse();

  for (let i = 0; i < n.length; i++) {
    return arr.length > 1
      ? [arr[i], ...flipNumber(arr.slice(i + 1))].join``
      : arr;
  }
  //////////////////////////////////////////////!SECTION
  //   let arr = n.split(''),
  //     res = '';

  //   while (arr.length) {
  //     res += arr.pop();
  //     arr.reverse();
  //   }

  //   return res;
  //////////////////////////////////////////////!SECTION
  //   return n ? n.at(-1) + flipNumber([...n].reverse().slice(1).join``) : n;
  //////////////////////////////////////////////!SECTION
  //   let [arr, i] = [[...n], 0];

  //   do {
  //     arr = [...arr.slice(0, i), ...arr.slice(i).reverse()];
  //     i++;
  //   } while (i < n.length);

  //   return arr.join``;
  //////////////////////////////////////////////!SECTION
  //   let c = 0;

  //   return Array.from({ length: n.length }, (_, k) =>
  //     k % 2 == 0 ? n[n.length - k - 1 + c] : n[c++]
  //   ).join('');
  //////////////////////////////////////////////!SECTION
  //   return [...n].map((el, i) => n.at(~i) + el).join``.slice(0, n.length);
  //////////////////////////////////////////////!SECTION
  //   let out = [];
  //   let chars = string.split('');

  //   while (chars.length) {
  //     out.push(chars.reverse().shift());
  //   }

  //   return out.join('');
}
//////////////////////////////////////////////!SECTION
// const flipNumber = n =>
//     (arr => [...n].reduce(pre => pre + arr.reverse().shift(), ``))
//     ([...n])

console.log(flipNumber('012')); //"201"
console.log(flipNumber('012345')); //"504132"
console.log(flipNumber('0123456789')); //"9081726354"
