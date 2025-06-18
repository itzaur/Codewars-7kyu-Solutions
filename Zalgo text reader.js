/*
Description:

Zalgo text is text that leaks into our plane of existence from a corrupted dimension of Unicode. For example:


H̗̪͇͓̙͎̣̄ͬa͚̯̦͉̖̥v͆ͩ̃͆̓̐ͥe̟͎͖͕͍̎ ̰͚̩̟͕̰͊̽̍ͯ̌͊ā̖̪͉͍̥͙̿ͩ̃ͅ ̬̥͎͑̿ͧg̰̳̺͔̦͉ͫ̀̐̓̐r̝̫̱̘̰͐͋ͯͭͭͭ͆e͙͕̖̗͙̰͌ͭä͓͚̝͓́̌͑ͪ͊ṱͥ ̱ͣd͎͔͎͇̫̪̘̃͐̇à͕̮̈͋ͪy̼̳̱ͮ!̳̥̰̭͇̔ͮ̽̓

Complete the function that converts a string of Zalgo text into a string interpretable by our mortal eyes. For example, the string above would be converted into:

Have a great day!

The converted string should only feature ASCII characters.
*/
function readZalgo(zalgotext) {
  return zalgotext.normalize('NFD').replace(/[\u0300-\u036F]/g, ``);
  //////////////////////////////////////////////!SECTION
  //   return [...zalgotext].filter((c) => c.charCodeAt(0) < 256).join('');
  //////////////////////////////////////////////!SECTION
  //   return s.replace(/[^\w.,!? ]/g, '');
  //////////////////////////////////////////////!SECTION
  //   return textZalgo.match(/[A-Za-z0-9 .,!?]/g).join('');
  //////////////////////////////////////////////!SECTION
  //   return [...zalgotext].filter((e) => e.charCodeAt() < 127).join('');
  //////////////////////////////////////////////!SECTION
  //   return zalgotext
  //     .split('')
  //     .filter((x) => x.charCodeAt(0) < 128)
  //     .join('');
}

console.log(readZalgo('H̗̪͇͓̙͎̣̄ͬa͚̯̦͉̖̥v͆ͩ̃͆̓̐ͥe̟͎͖͕͍̎ ̰͚̩̟͕̰͊̽̍ͯ̌͊ā̖̪͉͍̥͙̿ͩ̃ͅ ̬̥͎͑̿ͧg̰̳̺͔̦͉ͫ̀̐̓̐r̝̫̱̘̰͐͋ͯͭͭͭ͆e͙͕̖̗͙̰͌ͭä͓͚̝͓́̌͑ͪ͊ṱͥ ̱ͣd͎͔͎͇̫̪̘̃͐̇à͕̮̈͋ͪy̼̳̱ͮ!̳̥̰̭͇̔ͮ̽̓')); //'Have a great day!'
