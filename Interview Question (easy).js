/*
DESCRIPTION:
You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
Have fun! ;)
*/
function getStrings(city) {
  const string = city.toLowerCase().replaceAll(' ', '').split``;
  const occurrences = string.reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return [...new Set(string)].map(
    (el) => `${el}:${'*'.repeat(occurrences[el])}`
  ).join`,`;
  //////////////////!SECTION
  //   const string = city.toLowerCase().replaceAll(' ', '').split``;
  //   const occurrences = string.reduce((acc, el) => {
  //     return { ...acc, [el]: (acc[el] || '') + '*' };
  //   }, {});

  //   return Object.entries(occurrences).map(el => el.join`:`).join``;
}

// const getStrings = (city) =>
//   ((arr) =>
//     [...new Set(arr)]
//       .join(``)
//       .match(/[a-z]/g)
//       .map((val) => `${val}:${`*`.repeat(arr.filter((v) => v === val).length)}`)
//       .join(`,`))([...city.toLowerCase()]);

console.log(getStrings('Chicago')); //'c:**,h:*,i:*,a:*,g:*,o:*'
console.log(getStrings('Bangkok')); //'b:*,a:*,n:*,g:*,k:**,o:*'
console.log(getStrings('Las Vegas')); //'l:*,a:**,s:**,v:*,e:*,g:*'
