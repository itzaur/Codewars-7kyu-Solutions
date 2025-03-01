/*
Description:
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

catchSignChange(arr) == 2;
*/
function catchSignChange(arr, count = 0) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] < 0 && arr[i + 1] >= 0) || (arr[i] >= 0 && arr[i + 1] < 0)) {
      count++;
    }
  }

  return count;
  ////////////////////////////////////////!SECTION
  // return arr.slice(1).filter((e, i) => e < 0 !== arr[i] < 0).length;
  ////////////////////////////////////////!SECTION
  // return arr.reduce(
  //   (pre, val, idx) => idx && pre + (val < 0 !== arr[--idx] < 0),
  //   0
  // );
}

console.log(catchSignChange([])); //0
console.log(catchSignChange([1, 3, 4, 5])); //0
console.log(catchSignChange([1, -3, -4, 0, 5])); //2
console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77])); //3
