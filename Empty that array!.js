/*
DESCRIPTION:
Today's task is to write a function empty(), which take an array as argument. This function should return the same array, but empty.

To make it even more fun, you are not allowed to use any kind of loop (nor recursion)

Good luck!
*/
function empty(array) {
  array.length = 0;
  return array;
  //////////////!SECTION
  //   array.splice(0, array.length);
  //   return array;
}

var foo = [1, 2, 3];

console.log(empty(foo) === foo && foo.length === 0); //true
