/*
Description:
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/
function strCount(obj) {
  return Object.values(obj).reduce((acc, el) => {
    return (
      acc +
      (typeof el === 'string'
        ? 1
        : el && typeof el === 'object'
        ? strCount(el)
        : 0)
    );
  }, 0);
  //////////////////////////////////////////////!SECTION
  // return typeof obj !== `string`
  //   ? Object.values(obj || {}).reduce((pre, val) => pre + strCount(val), 0)
  //   : 1;
  //////////////////////////////////////////////!SECTION
  // let count = 0;

  // for (key in obj) {
  //   if (typeof obj[key] == 'string') count++;
  //   if (typeof obj[key] == 'object') count += strCount(obj[key]);
  // }

  // return count;
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {},
  })
); //3
