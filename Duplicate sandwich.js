/*
Description:
Task

In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

Your task is to output a list of everything inbetween both occurrences of this element in the list.
Examples:

[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
"example" => "xampl"

Notes

    All elements will be the same datatype.

    All used elements will be primitive.

*/
function duplicateSandwich(a) {
  if (Array.isArray(a)) {
    const firstIndex = a.indexOf(a.find((item, i) => a.indexOf(item) !== i));
    const lastIndex = a.lastIndexOf(a[firstIndex]);

    return a.slice(firstIndex + 1, lastIndex);
  } else {
    const firstIndex = a.indexOf(
      a.split``.find((item, i) => a.indexOf(item) !== i)
    );
    const lastIndex = a.lastIndexOf(a[firstIndex]);

    return a.slice(firstIndex + 1, lastIndex);
  }
  ////////////////////////////////////////!SECTION
  //   let duplicated = [...list].find(
  //     (a) => list.indexOf(a) !== list.lastIndexOf(a)
  //   );

  //   return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated));
}
////////////////////////////////////////!SECTION
// const duplicateSandwich = (a) =>
//   ((start, end) => a.slice(++start, end))(
//     ...[...a].reduce(
//       (pre, val, idx) =>
//         a.indexOf(val) === a.lastIndexOf(val) ? pre : [...pre, idx],
//       []
//     )
//   );

console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])); //[2, 3, 4, 5, 6]
console.log(
  duplicateSandwich(['None', 'Hello', 'Example', 'hello', 'None', 'Extra'])
); //["Hello", "Example", "hello"]
console.log(duplicateSandwich([0, 0])); //[]
console.log(duplicateSandwich([true, false, true])); //[false]
console.log(duplicateSandwich('example')); //"xampl"
