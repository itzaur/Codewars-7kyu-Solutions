/*
Description:
Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

#Examples:

*Example 1*
SubstringTest("Something","Fun"); //Returns false

*Example 2*
SubstringTest("Something","Home"); //Returns true
In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)

#Rules: Lowercase and uppercase letters are the same. So 'A' == 'a'.
We only count substrings that are > 1 in length.

#Input: Two strings with both lower and upper cases. #Output: A boolean value determining if there is a common substring between the two inputs.
*/
function substringTest(str1, str2) {
  const maxLength = Math.max(str1.length, str2.length);

  const arr1 = [],
    arr2 = [];

  for (let i = 0; i < maxLength; i++) {
    arr1.push(str1.toLowerCase().slice(i, i + 2));
    arr2.push(str2.toLowerCase().slice(i, i + 2));
  }

  const result1 = arr1.filter((el) => el.length === 2);
  const result2 = arr2.filter((el) => el.length === 2);

  return (
    result1.map((el) => result2.includes(el)).filter((el) => el === true)
      .length >= 1
  );
  ////////////////////////////////////////////!SECTION
  //   return /(..).*\|.*\1/i.test(s1 + '|' + s2);
  ////////////////////////////////////////////!SECTION
  //   return [...str1]
  //     .slice(0, -1)
  //     .some((_, i) => new RegExp(str1.slice(i, i + 2), 'gi').test(str2));
}

console.log(substringTest('Something', 'Home')); //true
console.log(substringTest('Something', 'Fun')); //false
console.log(substringTest('Something', '')); //false
console.log(substringTest('BANANA', 'banana')); //true
