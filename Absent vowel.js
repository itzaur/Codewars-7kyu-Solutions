/*
Description:
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/
function absentVowel(x) {
  const options = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
  };
  const sum = 10;

  return (
    sum -
    [...new Set(x.match(/[aeiou]/gi))].reduce((acc, el) => acc + options[el], 0)
  );
  // Set is awesome
  // const setA = new Set(['a', 'e', 'i', 'o', 'u']);
  // const setB = new Set(x.match(/[aeiou]/gi));
  // const difference = setA.difference(setB);

  // return options[[...difference]];
  ////////////////////////////////////////////////////////////!SECTION
  //   return ['a', 'e', 'i', 'o', 'u'].findIndex((v) => !x.includes(v));
}

console.log(absentVowel('John Doe hs seven red pples under his bsket')); //0
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles')); //3
