/*
DESCRIPTION:
You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

You can assume, that the input string has always non-zero length.

Examples
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated)
*/
function firstNonRepeated(s) {
  const indexArr = [...s]
    .map((el) => s.indexOf(el))
    .reduce((acc, el) => {
      return { ...acc, [el]: (acc[el] || 0) + 1 };
    }, {});

  const result = Object.entries(indexArr).filter(([_, val]) => val === 1);
  const index = result.flat().at();

  return s[index] || null;

  //   return [...s].find((el) => s.indexOf(el) === s.lastIndexOf(el)) || null;
}

console.log(firstNonRepeated('test')); //'e'
console.log(firstNonRepeated('mfokfshmhkinlljgginoj')); //'s'
console.log(firstNonRepeated('teeter')); //'r'
console.log(firstNonRepeated('1122321235121222')); //'5'
console.log(firstNonRepeated('rend')); //'r'
console.log(firstNonRepeated('gsglskthmqpnjhorrlmqkiountumipj')); //'r'
