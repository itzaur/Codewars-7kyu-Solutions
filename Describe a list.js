/*
Description:
Write function describeList which returns "empty" if the list is empty or "singleton" if it contains only one element or "longer"" if more.
*/
function describeList(x) {
  switch (true) {
    case x.length === 0:
      return 'empty';
    case x.length > 1:
      return 'longer';
    default:
      return 'singleton';
  }
  //////////////////////////////////////!SECTION
  //   return ['empty', 'singleton'][x.length] || 'longer';
  //////////////////////////////////////!SECTION
  //   return [`empty`, `singleton`, `longer`][Math.min(x.length, 2)];
}

console.log(describeList([])); //"empty"
console.log(describeList([1])); //"singleton"
console.log(describeList([1, 2])); //"longer"
console.log(describeList([])); //"empty"
console.log(describeList([1.5])); //"singleton"
console.log(describeList([1.5, 2.5])); //"longer"
