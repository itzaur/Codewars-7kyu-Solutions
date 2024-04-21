/*
DESCRIPTION:
Make me slow! Calling makeMeSlow() should take at least 7 seconds.
*/
function makeMeSlow() {
  return Array.from({ length: 50000000 }, (el, i) => i + el);
  //////////////////!SECTION
  //   const start = new Date().getTime();
  //   while (start + 7000 > new Date().getTime()) {}
}

const start = new Date().getTime();
makeMeSlow();
const duration = new Date().getTime() - start;
console.log(start);
console.log(duration);
