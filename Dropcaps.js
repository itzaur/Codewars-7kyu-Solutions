/*
Description:
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   "
Note: you will be provided atleast one word and should take string as input and return string as output.
*/
function dropCap(n) {
  return n.replace(
    /\b\w{3,}\b/gi,
    (el, i) => el[0].toUpperCase() + el.slice(1).toLowerCase()
  );
  ////////////////////////////////////////!SECTION
  //   return n.replace(
  //     /\S{3,}/g,
  //     (w) => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase()
  //   );
  ////////////////////////////////////////!SECTION
  // return n.replace(/\b(\w)(\w{2,})/g, (_, $1, $2) => $1.toUpperCase() + $2.toLowerCase());
  ////////////////////////////////////////!SECTION
  //   return str
  //     .split(' ')
  //     .map(function (w) {
  //       return w.length > 2 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w;
  //     })
  //     .join(' ');
}

console.log(dropCap('Apple Banana')); //"Apple Banana"
console.log(dropCap('Apple')); //"Apple"
console.log(dropCap('')); //""
console.log(dropCap('of')); //"of"
console.log(
  dropCap(
    'Revelation of the contents outraged American public opinion, and helped generate'
  )
); //"Revelation of The Contents Outraged American Public Opinion, And Helped Generate"
console.log(dropCap('more  than    one space between words')); //"More  Than    One Space Between Words"
console.log(dropCap('  leading spaces')); //"  Leading Spaces"
console.log(dropCap('trailing spaces   ')); //"Trailing Spaces   "
console.log(dropCap('ALL CAPS CRAZINESS')); //"All Caps Craziness"
console.log(dropCap('rAnDoM CaPs CrAzInEsS')); //"Random Caps Craziness"
