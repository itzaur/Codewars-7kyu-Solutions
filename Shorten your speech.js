/*
Description:
You are given a String of one or more words. Your task is to check the length of each word and if it's less than 4, you keep it unmodified otherwise you find out the first vowel which is coming after 3-rd character and replace vowel and rest of word with a dot. Finally, you should return the same string but shorten (only if the length of words is more then 3 characters).

Please note :

 1) You are not asked to trim anything.

2) Apostrophes are part of words.

3) Commas following shortened words are considered characters and should be removed.

Examples:

shortenSpeech( "Hello, do you want a coffee ? " ) => returns "Hell. do you want a coff. ? "

shortenSpeech( "Hey fellow warriors !" ) => returns "Hey fell. warr. !"

shortenSpeech( "This is a test") => returns "This is a test"
*/
const shortenSpeech = (str) => {
  return str.replace(/\b(\S{3,}?)[aeiou]\S*/g, `$1.`);
  //////////////////////////////////////////!SECTION
  // return str.replace(/([a-z']{3}[^aeiou\s]*)([aeiou][a-z,']*)/gi, '$1.')
  //////////////////////////////////////////!SECTION
  // return str.replace(/([\w']{3}\w*?)[auoie][\w,]*/g, (_, i) => i + '.');
  //////////////////////////////////////////!SECTION
  // return str.replace(
  //   /[a-z']{3,},?/gi,
  //   (m) => m.substr(0, 3) + m.substring(3, m.length).replace(/[aeiou].*/i, '.')
  // );
  //////////////////////////////////////////!SECTION
  // return str
  //   .split(' ')
  //   .map((word) =>
  //     word.length < 4 ? word : word.replace(/^(.{3,}?)([aeiou].*)/gi, '$1.')
  //   )
  //   .join(' ');
};

console.log(shortenSpeech('Hello, do you want a coffee ? ')); //"Hell. do you want a coff. ? "
9;
console.log(shortenSpeech('Did you bring your computer ?')); //"Did you bring your comp. ?"
10;
console.log(shortenSpeech("I've just finished my first kata")); //"I'v. just fin. my first kat."
