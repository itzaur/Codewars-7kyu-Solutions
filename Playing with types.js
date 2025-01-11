/*
Description:

JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

For example:

typing(2);            //returns "number=2"
typing(true);         //returns "boolean=true"
typing("test");       //returns "string="test""
typing([1,2,3]);      //returns "object=[1,2,3]"
typing({a:1,b:2});    //returns "object={"a":1,"b":2}"
typing(function(){}); //returns "function=function (){}"
typing(undefined);    //returns "undefined"
*/
function typing(param) {
  switch (true) {
    case Array.isArray(param):
      return `${typeof param}=[${param}]`;
    case typeof param === 'function':
      return `${typeof param}=${param}`;
    case typeof param === 'undefined':
      return 'undefined';
    default:
      return `${typeof param}=${JSON.stringify(param)}`;
  }
  ////////////////////////////////////////!SECTION
  //   return param === undefined
  //     ? 'undefined'
  //     : typeof param + '=' + (JSON.stringify(param) || param);
  ////////////////////////////////////////!SECTION
  //   var type = typeof param;

  //   return type == 'undefined'
  //     ? type
  //     : type +
  //         '=' +
  //         (type == 'function' ? param.toString() : JSON.stringify(param));
}

console.log(typing(1)); //"number=1"
console.log(typing(true)); //"boolean=true"
