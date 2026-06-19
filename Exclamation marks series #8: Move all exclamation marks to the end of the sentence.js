/*
Description:
Description:

Move all exclamation marks to the end of the sentence
Examples

"Hi!"          ---> "Hi!"
"Hi! Hi!"      ---> "Hi Hi!!"
"Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
"Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
"Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"
*/
function remove(string) {
  return string.replace(/!/g, ``) + string.replace(/[^!]/g, ``);
}
////////////////////////////////////!SECTION
// const remove = ($) => $.replace(/!/g, '') + ($.match(/!/g)||[]).join('')

console.log(remove('Hi!')); //'Hi!'
console.log(remove('Hi! Hi!')); //'Hi Hi!!'
console.log(remove('Hi! Hi! Hi!')); //'Hi Hi Hi!!!'
console.log(remove('Hi! !Hi Hi!')); //'Hi Hi Hi!!!'
console.log(remove('Hi! Hi!! Hi!')); //'Hi Hi Hi!!!!'
