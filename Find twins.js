/*
DESCRIPTION:
Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins. Your task is to identify them and eliminate!

Given an array of integers, your task is to find two same numbers and return one of them, for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.

If there are no twins in the city - return None or the equivalent in the language that you are using.
*/
function elimination(arr) {
  const occurrences = arr.reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return arr.filter((el) => occurrences[el] > 1)[0] || null;
  //////////////////////////////!SECTION
  //   return arr.filter((e, i) => i !== arr.lastIndexOf(e))[0] || null;
  //////////////////////////////!SECTION
  //   return arr.find((e, i) => i !== arr.lastIndexOf(e)) || null;
  //////////////////////////////!SECTION
  //   return arr.reduce(
  //     (acc, item) => (arr.indexOf(item) === arr.lastIndexOf(item) ? acc : item),
  //     null
  //   );
}

console.log(elimination([2, 5, 34, 1, 22, 1])); //1
console.log(elimination([2, 2, 34, 1, 22])); //2
console.log(elimination([2, 5, 34, 1, 22])); //null
