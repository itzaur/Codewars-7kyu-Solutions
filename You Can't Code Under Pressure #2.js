/*
Description:

Code as fast as you can!

You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.
*/
function Counter() {
  this.check = undefined;
  this.increment = undefined;

  let count = 0;

  this.check = () => count;

  this.increment = () => count++;
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.check()); //2
