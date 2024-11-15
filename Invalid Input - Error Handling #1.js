/*
Description:
Error Handling is very important in coding and seems to be overlooked or not implemented properly.

#Task

Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. Handle invalid input and don't forget to return valid ones.

#Input

The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. However you could also receive inputs that are not strings. If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)

Example:
Input: getCount('test')
Output: {vowels:1,consonants:3}

Input: getCount('tEst')
Output: {vowels:1,consonants:3}

Input getCount('    ')
Output: {vowels:0,consonants:0}

Input getCount()
Output: {vowels:0,consonants:0}
*/
function getCount(words) {
  if (typeof words !== 'string') return { vowels: 0, consonants: 0 };

  const vowels = (words.match(/[aeiou]/gi) || []).length;
  const consonants = (words.match(/[b-df-hj-np-tv-z]/gi) || []).length;

  return { vowels: vowels, consonants: consonants };
  //////////////////////////////////////!SECTION
  //   return typeof words == 'string'
  //     ? {
  //         vowels: (words.match(/[aeiou]/gi) || []).length,
  //         consonants: (words.match(/(?![aeiou])[a-z]/gi) || []).length,
  //       }
  //     : { vowels: 0, consonants: 0 };
  //////////////////////////////////////!SECTION
  //   let obj = { vowels: 0, consonants: 0 };

  //   if (!words || typeof words !== 'string') return obj;

  //   return words
  //     .replace(/[^a-z]/gi, '')
  //     .split('')
  //     .reduce((a, c) => {
  //       if (~c.search(/a|e|i|o|u/i)) a.vowels++;
  //       else a.consonants++;
  //       return a;
  //     }, obj);
}

console.log(getCount('Test')); //{vowels:1,consonants:3}
console.log(getCount('Here is some text')); //{vowels:6,consonants:8}
console.log(getCount('To be a Codewarrior or not to be')); //{vowels:12,consonants:13}
console.log(getCount('To Kata or not to Kata')); //{vowels:8,consonants:9}
console.log(getCount('aeiou')); //{vowels:5,consonants:0}

console.log(getCount('TEst')); //{vowels:1,consonants:3}
console.log(getCount('HEre Is sOme text   ')); //{vowels:6,consonants:8}
console.log(getCount()); //{vowels:0,consonants:0}
console.log(getCount(['To Kata or not to Kata'])); //{vowels:0,consonants:0}
console.log(getCount(undefined)); //{vowels:0,consonants:0}
console.log(getCount(`~_,.'     <>=[]/\`!@#$%^&*(){}?:;-=+|`)); //{vowels:0,consonants:0}
