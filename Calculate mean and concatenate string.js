/*
Description:

You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

Here is an example of your return

[3.6, "udiwstagwo"]

In C# and Java the mean return is a double.
*/
function mean(lst) {
  const result = lst.reduce(
    (acc, el) => {
      return (isNaN(el) ? (acc[1] += el) : (acc[0] += Number(el)), acc);
    },
    [0, ''],
  );

  return [result[0] / 10, result[1]];
}
////////////////////////////////////////////!SECTION
// const mean = (lst) =>
//   lst.reduce(
//     ([num, str], val) =>
//       isNaN(val) ? [num, str + val] : [(num * 10 + +val) / 10, str],
//     [0, ``],
//   );

console.log(
  mean([
    'u',
    '6',
    'd',
    '1',
    'i',
    'w',
    '6',
    's',
    't',
    '4',
    'a',
    '6',
    'g',
    '1',
    '2',
    'w',
    '8',
    'o',
    '2',
    '0',
  ]),
); //[3.6, "udiwstagwo"]
console.log(
  mean([
    '0',
    'c',
    '7',
    'x',
    '6',
    '2',
    '3',
    '5',
    'w',
    '7',
    '0',
    'y',
    'v',
    'u',
    'h',
    'i',
    'n',
    'u',
    '0',
    '0',
  ]),
); //[3.0, "cxwyvuhinu"]
console.log(
  mean([
    '0',
    'u',
    'a',
    'y',
    '0',
    'a',
    '9',
    'q',
    '3',
    'v',
    'g',
    '7',
    '6',
    '4',
    'y',
    'd',
    '8',
    '6',
    '0',
    'd',
  ]),
); //[4.3, "uayaqvgydd"]
console.log(
  mean([
    's',
    'n',
    '9',
    'l',
    '0',
    'm',
    'i',
    'z',
    '9',
    '7',
    'y',
    '4',
    'z',
    '3',
    '3',
    'k',
    '4',
    '1',
    '0',
    'k',
  ]),
); //[4.0, "snlmizyzkk"]
console.log(
  mean([
    '5',
    'v',
    'u',
    'k',
    '8',
    '4',
    '9',
    'b',
    '9',
    'g',
    '5',
    'z',
    '3',
    'f',
    '6',
    'u',
    'i',
    '6',
    '6',
    't',
  ]),
); //[6.1, "vukbgzfuit"]
console.log(
  mean([
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '0',
    'a',
    'a',
    'd',
    'd',
    'g',
    'q',
    'u',
    'v',
    'y',
    'y',
  ]),
); //[0.9, "aaddgquvyy"]
console.log(
  mean([
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    'a',
    'a',
    'd',
    'd',
    'g',
    'q',
    'u',
    'v',
    'y',
    'y',
  ]),
); //[1.0, "aaddgquvyy"]
