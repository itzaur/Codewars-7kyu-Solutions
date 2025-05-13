/*
Description:
You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

If letter = 'r':
"are you really learning Ruby?" # => "eenu"
"Katy Perry is on the radio!"   # => "rya"
"Pirates say arrrrrrrrr."       # => "arrrrrrrr"
"r8 your friend"                # => "i"
Return an empty string if there are no instances of letter in the given string.

Adapted from: Ruby Kickstart
*/
function comes_after(str, l) {
  return str.split``.reduce((acc, el, i) => {
    if (
      el.toLowerCase() === l.toLowerCase() &&
      str[i + 1] &&
      /[a-zA-Z]/.test(str[i + 1])
    ) {
      acc += str[i + 1];
    }

    return acc;
  }, '');
  ////////////////////////////////////////////////!SECTION
  //   const reg = RegExp(l, 'i');
  //   const arr = str.split('');
  //   return arr
  //     .filter((el, i) => i && reg.test(str[i - 1]) && /[a-z]/i.test(el))
  //     .join('');
  ////////////////////////////////////////////////!SECTION
  // return (str.match(new RegExp(`(?<=${l})[a-z]`,'gi'))||[]).join('');
}

console.log(comes_after('are you really learning Ruby?', 'r')); //'eenu'
console.log(comes_after('Pirates say arrrrrrrrr', 'r')); //'arrrrrrrr'
console.log(comes_after('Free coffee for all office workers!', 'f')); //'rfeofi'
console.log(comes_after('Every Sunday, she reads newspapers.', 's')); //'uhp'
console.log(comes_after('king kUnta is the sickest rap song ever kNown', 'k')); //'iUeN'
console.log(comes_after('p8tice makes pottery p_r p0rfect!', 'p')); //'o'
console.log(comes_after('d8u d._ rly 2d1s', 'D')); //''
console.log(comes_after('nothing to be found here', 'z')); //''
