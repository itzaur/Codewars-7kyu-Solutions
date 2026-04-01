/*
Description:

Write a function that returns whether it is running in strict mode.
*/
function isInStrictMode() {
  return !this;
}
//////////////////////////////!SECTION
// const isInStrictMode = () => !this;

console.log(isInStrictMode()); //false
