/*
Description:

Write a function that returns whether it was called with the new operator.

The function must return a Boolean, but due to the way new works, valueOf() will be called on your returned value before strict comparison to true/false.

Examples:

wasCalledWithNew().valueOf();        // false
(new wasCalledWithNew).valueOf();    // true
wasCalledWithNew.call({}).valueOf(); // false
*/
function wasCalledWithNew() {
  return new Boolean(new.target && this instanceof wasCalledWithNew);
  //////////////////////////////!SECTION
  //   if (!(this instanceof wasCalledWithNew)) return false;
  //   this.valueOf = () => true;
  //   return false;
  //////////////////////////////!SECTION
  //   return { valueOf: () => new.target === wasCalledWithNew };
}

function Constructor() {}
Object.setPrototypeOf(Constructor.prototype, wasCalledWithNew.prototype);
const object = new Constructor();
console.log(wasCalledWithNew.call(object)); //false
