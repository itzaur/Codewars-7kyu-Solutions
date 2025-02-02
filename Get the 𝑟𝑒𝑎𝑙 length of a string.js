/*
Description:
In languages that use UTF-16 encoding for strings (JavaScript, JVM languages like Java, .NET languages like C#...), if the code point of a character is larger than 0xFFFF, it will be treated as two code units.

For example:

The code point of the emoji 🙉 (U+1F649, Hear-No-Evil Monkey) is 0x1F649.

'🙉'.length; // 2
Write a function that returns the real length of a string.

"abcd"   --> 4
"🙉"     --> 1
"😸🦌🚀" --> 3
*/
function getRealLength(string) {
  return [...string].length;
  ////////////////////////////////////!SECTION
  // return string.replace(/[\ud800-\udbff]/g, '').length;
  ////////////////////////////////////!SECTION
  // return s.split(/(?:)/u).length;
  ////////////////////////////////////!SECTION
  // let realLength = 0;

  // for (let char of string) realLength++;

  // return realLength;
  ////////////////////////////////////!SECTION
  // const chars = Array.from(string);

  // return chars.length;
}

console.log(getRealLength('')); //0
console.log(getRealLength('abcd')); //4
console.log(getRealLength('中国')); //2
console.log(getRealLength('𝓪𝓫𝓬𝓭')); //4
console.log(getRealLength('𨭎𩷶')); //2
console.log(getRealLength('😸🦌🚀')); //3
console.log(getRealLength('↓→↑←')); //4
console.log(getRealLength('\nabc\ndef\n')); //9
console.log(getRealLength('📥𝑦💷ぱdm🐾𝐢.𝑣👭れ8k𝒒𝓭𝒑👊𝐢の')); //20
