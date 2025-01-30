/*
Description:
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
*/
function duplicates(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const array = arr.slice(0, i + 1);

    if (array.includes(arr[i + 1])) {
      result.push(arr[i + 1]);
    }
  }

  return [...new Set(result)];
  //////////////////////////////////////!SECTION
  //   return [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))];
  //////////////////////////////////////!SECTION
  //   return arr.reduce(function (prev, cur, i, a) {
  //     if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
  //       prev.push(cur);
  //     }
  //     return prev;
  //   }, []);
  //////////////////////////////////////!SECTION
  //   let map = new Map();
  //   let set = new Set();

  //   arr.forEach((e) => {
  //     map.get(e) ? set.add(e) : map.set(e, true);
  //   });

  //   return Array.from(set);
  //////////////////////////////////////!SECTION
  //   let resultArr = [];

  //   for (let i = 1; i < arr.length; i++) {
  //     for (let j = 0; j < i; j++) {
  //       if (arr[j] === arr[i]) {
  //         resultArr.push(arr[j]);
  //       }
  //     }
  //   }

  //   return [...new Set(resultArr)];
}

console.log(duplicates([1, 2, 3, 4, 5])); //[]
console.log(duplicates([])); //[]
console.log(duplicates(['no', 'duplicates', 'here'])); //[]
console.log(duplicates([1, 2, 3, 4, 3])); //[3]
console.log(duplicates([1, 2, 3, 3, 2, 1])); //[3, 2, 1]
console.log(duplicates([1, 2, 1, 2, 1, 2, 1])); //[1, 2]
console.log(duplicates([1, 2, 3, 4, '3'])); //[]
console.log(duplicates(['1', 2, 3, 3, '2', 1])); //[3]
console.log(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut'])); //[4, 3, 'zut']
