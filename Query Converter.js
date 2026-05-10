/*
Description:

In web developement. Using query to grab data is very common.

Query starts with '?' after the link

Example:

Link: www.whatsup.com?name=huy&lastname=dang

Query: ?name=huy&lastname=dang

Write a function that return an object that contains all the datas in the query which are seperated by '&'

Example: www.whatsup.com?name=Huy&lastname=Dang

-> Query: ?name=Huy&lastname=Dang

-> Should return: {name: 'Huy', lastname: 'Dang'}

p/s: - No case sensitive, easy, keep it the way it is.
*/
var solution = (str) => {
  const queryIndex = str.indexOf('?');
  const result = str.slice(queryIndex + 1);

  return result.split('&').reduce((acc, el) => {
    const [key, value] = el.split('=');
    acc[key] = value;

    return acc;
  }, {});
  ////////////////////////////////////////////!SECTION
  //   return str
  //     .split('?')[1]
  //     .split('&')
  //     .reduce(
  //       (prev, cur) => ({ ...prev, [cur.split('=')[0]]: cur.split('=')[1] }),
  //       {},
  //     );
  ////////////////////////////////////////////!SECTION
  //   const queryString = str.slice(str.indexOf('?') + 1);
  //   const entries = queryString.split('&').map((x) => x.split('='));
  //   return Object.fromEntries(entries);
};

console.log(solution('www.whatsup.com?name=Huy&lastname=dang')); //{name: "Huy", lastname: "dang"}
console.log(solution('www.whatsup.com?name=Sam&age=29')); //{name: "Sam", age: '29'}
console.log(solution('www.whatsup.com?shoe=Nike&size=11')); //{shoe: "Nike", size: '11'}
console.log(solution('www.whatsup.com?brand=Coach&itemId=9123')); //{brand:"Coach", itemId:'9123'}
console.log(solution('www.whatsup.com?make=Honda&model=Civic')); //{make: 'Honda', model: 'Civic'}
console.log(solution('www.whatsup.com?item=iphone&gen=X')); //{item:'iphone', gen:'X'}
