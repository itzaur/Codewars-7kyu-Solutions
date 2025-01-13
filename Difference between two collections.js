/*
Description:
Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

Example
A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]
*/
function diff(a, b) {
  // Seriously? Doesn't work?
  // return [...new Set(a).symmetricDifference(new Set(b))].sort();
  return [
    ...new Set(
      a
        .map((el, i) => (!b.includes(el) ? el : ''))
        .concat(b.map((el, i) => (!a.includes(el) ? el : '')))
    ),
  ]
    .filter((el) => el)
    .sort();
  //////////////////////////////////////////////!SECTION
  //   return [
  //     ...new Set([...a, ...b].filter((val) => a.includes(val) ^ b.includes(val))),
  //   ].sort();
}

console.log(diff(['a', 'b'], ['a', 'b'])); //[]
console.log(diff(['a', 'b', 'z', 'd', 'e', 'd'], ['a', 'b', 'j', 'j'])); //["d","e","j","z"]
console.log(diff(['a', 'b', 'z'], ['a', 'b'])); //["z"]
