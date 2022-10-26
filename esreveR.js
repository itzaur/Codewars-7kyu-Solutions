/*
Description:

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

reverse = function (array) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 0) {
    const result = array.pop();
    newArr.push(result);
  }
  return newArr;

  //   let newArr = [];
  //   for (let i = array.length - 1; i >= 0; i--) {
  //     newArr.push(array[i]);
  //   }
  //   return newArr;

  //   return [...array].reduceRight((acc, el) => {
  //     //   return acc.push(el), acc;
  //     return [...acc, el];
  //   }, []);

  //   return array.reduce((acc, el) => {
  //     // return [el].concat(acc);
  //     return [el, ...acc];
  //   }, []);

  // return array.map((_, i) => array[array.length - 1 - i])

  //   let ind = array.length
  //   return array.map((el) => array[--ind])

  // let newArr = [];
  // for (let i in array) {
  //     console.log(i);
  //   newArr.unshift(array[i]);
  // }
  // return newArr;

  //   let newArr = [];
  //   for (let i of array) {
  //     console.log(i);
  //     newArr.unshift(i);
  //   }
  //   return newArr;

  //   const [first, ...rest] = array
  //   return array.length ? reverse(rest).concat(first) : array

  //   let newArr = [];
  //   while (array.length) newArr.push(array.pop());
  //   return newArr;
};

console.log(reverse([1, 2, 3])); //[3, 2, 1]
console.log(reverse([1, null, 14, "two"])); //["two", 14, null, 1]
