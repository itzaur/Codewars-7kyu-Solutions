/*
Description:
Basics - Generators #1
Generators are very useful things in programming, in this series we will learn how to use generators and see how we can apply generators to common programming challenges.
Task
You must complete the generator function that must increment a counter by 1 each time also if the argument is supplied (will always be a number) you must then change the counter to that number.
Important
The counter must start at 1 when the generator is initialized

More Info: Iterators and Generators (JavaScript), Generators Overview (PHP)
*/
function* generator() {
  let count = 1;

  while (true) {
    let newCount = yield count;

    if (newCount !== undefined) {
      count = newCount;
    } else {
      count++;
    }
  }
  ////////////////////////////!SECTION
  //   let a = 1,
  //     b;

  //   while (true) {
  //     b = yield b || a++;
  //   }
}

var gen = generator();
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //3
console.log(gen.next().value); //4
console.log(gen.next().value); //5
console.log(gen.next(10).value); //10
