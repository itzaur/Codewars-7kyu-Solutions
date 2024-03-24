/*
DESCRIPTION:
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/
function capMe(names) {
  return names.map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase());
  ////////////////////!SECTION
  //   return names.map((el) =>
  //     el.toLowerCase().replace(/./, (match) => match.toUpperCase())
  //   );
  ////////////////////!SECTION
  //   return names.map((el) =>
  //     el.replace(/\w/gi, (c, i) => (i ? c.toLowerCase() : c.toUpperCase()))
  //   );
}

console.log(capMe(['jo', 'nelson', 'jurie'])); //['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])); //['Karly', 'Daniel', 'Kelsey']
