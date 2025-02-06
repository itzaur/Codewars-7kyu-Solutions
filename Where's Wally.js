/*
Description:
Write a function that returns the index of the first occurrence of the word "Wally".

"Wally" must not be part of another word, but it can be directly followed by a punctuation mark.

If no such "Wally" exists, return -1.

Examples:
"Wally" --> 0
"Where's Wally" --> 8
"Where's Waldo" --> -1
"DWally Wallyd .Wally" --> -1
"Hi Wally." --> 3
"It's Wally's." --> 5
"Wally Wally" --> 0
"'Wally Wally" --> 7
*/
function wheresWally(string) {
  const word = 'Wally';
  const regexp = new RegExp(' ' + word + '\\b');

  return (' ' + string).search(regexp);
  ////////////////////////////////!SECTION
  // return (' ' + string).search(/ Wally\b/);
  ////////////////////////////////!SECTION
  // return string.search(/(?<!\S)Wally\b/);
}

console.log(wheresWally('')); //-1
console.log(wheresWally('DWally')); //-1
console.log(wheresWally('.Wally')); //-1
console.log(wheresWally('Wally')); //0
console.log(wheresWally("Where's Wally")); //8
console.log(wheresWally('Hi Wally.')); //3
