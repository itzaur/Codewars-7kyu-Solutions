/*
Description:

Create a resolved javascript Promise that will return 'Hello World!'.
*/
function promiseHelloWorld() {
  return new Promise((res) => {
    res('Hello World!');
  });
}
////////////////////////////////////////////////!SECTION
// async function promiseHelloWorld() {
//   return 'Hello World!';
// }
////////////////////////////////////////////////!SECTION
// const promiseHelloWorld = () => Promise.resolve('Hello World!');
////////////////////////////////////////////////!SECTION
// const promiseHelloWorld = async () => 'Hello World!';
////////////////////////////////////////////////!SECTION
// const promiseHelloWorld = () => {
//   return new Promise(() => 'Hello World!');
// };
////////////////////////////////////////////////!SECTION
// const promiseHelloWorld = async () => await 'Hello World!';
////////////////////////////////////////////////!SECTION
// async function promiseHelloWorld() {
//   try {
//     return 'Hello World!';
//   } catch (err) {
//     console.log(err);
//   }
// }
