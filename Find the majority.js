/*
DESCRIPTION:
Goal
Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

Example
majority(["A", "B", "A"]) returns "A"
majority(["A", "B", "B", "A"]) returns null
*/
function majority(arr) {
  if (arr.length == 0) return null;

  const occurrences = arr.reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  const result = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

  return result.length > 1 && result[0][1] == result[1][1]
    ? null
    : result[0][0];
  //////////////////////////////////!SECTION
  //   const obj = arr.reduce((pre, val) => ((pre[val] = -~pre[val]), pre), {});
  //   const fArr = Object.keys(obj).filter(
  //     (val) => obj[val] === Math.max(...Object.values(obj))
  //   );
  //   return fArr.length === 1 ? fArr[0] : null;
}

console.log(majority(['A', 'B', 'A'])); //'A'
console.log(majority(['A', 'B', 'C'])); //null
console.log(majority(['A', 'B', 'B', 'A'])); //null
console.log(majority(['A', 'A', 'A', 'A'])); //'A'
console.log(majority(['A'])); //'A'
console.log(majority(['A', 'A', 'A', 'BBBBBBBB'])); //'A'
console.log(majority(['A', 'B', 'C', 'C'])); //'C'
console.log(majority([])); //null
console.log(majority(['B', 'C', '', ''])); //''
