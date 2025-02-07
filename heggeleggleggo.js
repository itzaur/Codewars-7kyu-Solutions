/*
Description:

Egg Talk.

Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.
Example

    hello => heggeleggleggo

    eggs => egegggeggsegg

    FUN KATA => FeggUNegg KeggATeggA
*/
function heggeleggleggo(word) {
  return word.replace(/[^aeiou ]/gi, (el) => `${el}egg`);
  //////////////////////////////////!SECTION
  //   return word.replace(/([^aeiou\s])/gi, '$1egg');
}

console.log(heggeleggleggo('eggy bread')); //'egegggeggyegg beggreggeadegg'
console.log(heggeleggleggo('hello')); //"heggeleggleggo"
console.log(heggeleggleggo('code here')); //"ceggodegge heggeregge"
