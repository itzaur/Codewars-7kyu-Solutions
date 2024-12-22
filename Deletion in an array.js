/*
Description:
The deleteValues function takes an array and removes elements that answer true to the pred function.

For some reason, some of the elements of the array for which the predicate holds are not deleted...

Can you fix the code?
*/
function deleteValues(array, pred) {
  for (let i = 0; i < array.length; i++) {
    if (pred(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }

  return array;
  //////////////////////////////////////////!SECTION
  //   const temp = array.filter((item) => !pred(item));
  //   array.length = 0;
  //   array.push.apply(array, temp);
  //   return array;
  //////////////////////////////////////////!SECTION
  //   const filtered = array.filter((e) => !pred(e));
  //   array.splice(0, array.length, ...filtered);
  //   return array;
}

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 === 1;
}

var arr = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];
console.log(deleteValues(arr, isEven)); //[1, 3, 5, 7, 9];

var arr = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];
console.log(deleteValues(arr, isOdd)); //[2, 4, 6, 8, 10];

var arr = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];
console.log(deleteValues(deleteValues(arr, isOdd), isEven)); //[]

var arr = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];
console.log(deleteValues(arr, isEven)); //[1, 3, 5, 7, 9];
console.log(arr); //[1, 3, 5, 7, 9];
