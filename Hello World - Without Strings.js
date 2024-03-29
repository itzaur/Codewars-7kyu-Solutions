/*
DESCRIPTION:
Task
You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`
Good luck and try to be as creative as possible!
*/
const helloWorld = () => {
  const asciiVersion = [
    72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33,
  ];

  const result = asciiVersion.map((el) => String.fromCharCode(el));

  return result.reduce((acc, el) => acc + el);
};

console.log(helloWorld()); //"Hello, World!"
