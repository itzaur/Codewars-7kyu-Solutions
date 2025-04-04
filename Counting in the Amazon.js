/*
Description:

The Arara is an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

    1 = anane
    2 = adak
    3 = adak anane
    4 = adak adak
    5 = adak adak anane
    6 = adak adak adak
    7 = adak adak adak anane
    8 = adak adak adak adak

Take a given number and return the Arara's equivalent.

e.g.

3 --> "adak anane"

8 --> "adak adak adak adak"

https://en.wikipedia.org/wiki/Arara_people
*/
function countArara(n) {
  const array = [];
  let i = 0;

  while (n >= i) {
    array.push(i);
    i += 2;
  }

  const result = array.at(-1) === n ? array : array.concat(1);

  return result.slice(1).map((el) => (el % 2 ? 'anane' : 'adak')).join` `;
  //////////////////////////////////////!SECTION
  //   return new Array(Math.ceil(n / 2)).join('adak ') + (n % 2 ? 'anane' : 'adak');
  //////////////////////////////////////!SECTION
  //   switch (n) {
  //     case 0:
  //       return '';
  //     case 1:
  //       return 'anane';
  //     case 2:
  //       return 'adak';
  //     default:
  //       return 'adak ' + countArara(n - 2);
  //   }
  //////////////////////////////////////!SECTION
  //   return `${`adak `.repeat(n / 2)}${`anane`.repeat(n % 2)}`.trim();
  //////////////////////////////////////!SECTION
  //   return Array(~~(n / 2)).fill('adak').concat(n % 2 ? 'anane' : '').join` `;
  //////////////////////////////////////!SECTION
  //   return n > 2 ? "adak " + countArara(n - 2) : n == 2 ? "adak" : "anane"
}

console.log(countArara(1)); //"anane"
console.log(countArara(3)); //"adak anane"
console.log(countArara(8)); //"adak adak adak adak"
