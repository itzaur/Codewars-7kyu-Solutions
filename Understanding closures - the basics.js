/*
Description:
This is a simple exercise to understand the feature in the javascript language called closure.

The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.

The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.
*/
function buildFun(n) {
  return Array.from({ length: n }, (_, i) => () => i);
  //////////////////////////////////!SECTION
  //   return [...Array(n)].map((_, i) => () => i);
}

for (var i = 0; i < 10; i++) {
  console.log(buildFun(10)[i]()); //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
