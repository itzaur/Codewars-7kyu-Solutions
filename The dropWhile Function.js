/*
Description:
Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

dropWhile(seq, isEven) // -> [1,2,5,4,3,2]
Your task is to implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other.
*/
function dropWhile(array, predicate) {
  const index = array.findIndex((el) => !predicate(el));

  return index < 0 ? [] : array.slice(index);
  ////////////////////////////////////////////!SECTION
  //   return array.length && predicate(array[0])
  //     ? dropWhile(array.slice(1), predicate)
  //     : array;
}

const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

const evens = [2, 4, 8];
console.log(dropWhile(evens, isEven)); //[]
console.log(dropWhile(evens, isOdd)); //[2, 4, 8]

const evensOddsEvens = [2, 4, 8, 5, 7, 9, 16, 32];
console.log(dropWhile(evensOddsEvens, isEven)); //[5, 7, 9, 16, 32]
console.log(dropWhile(evensOddsEvens, isOdd)); //[2, 4, 8, 5, 7, 9, 16, 32]

console.log(dropWhile([], isEven)); //[]
