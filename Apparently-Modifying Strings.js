/*
Description:
For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).

If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.

If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).

Examples:
Input 1

'It was great and I've never been on live television before but sometimes I don't watch this.'
Output 1

'It was great and apparently I've never been on live television before but apparently sometimes I don't watch this.'
Input 2

'but apparently'
Output 2

'but apparently'
(no changes because 'apparently' is already directly after 'but' and there should not be a duplicate.)

An occurrence of 'and' and/or 'but' only counts when it is at least one space separated. For example 'andd' and 'bbut' do not count as occurrences, whereas 'b but' and 'and d' does count.
*/
function apparently(string) {
  return string.replace(
    /(\band\b|\bbut\b)(\s+apparently\b)?/g,
    '$1 apparently'
  );
  ////////////////////////////////////////////!SECTION
  //   return string.replace(/\b(and|but)\b(?! apparently\b)/g, `$& apparently`);
  ////////////////////////////////////////////!SECTION
  //   return string
  //     .split(' ')
  //     .map((a, i, arr) =>
  //       (a === 'and' || a === 'but') && arr[i + 1] !== 'apparently'
  //         ? a + ' apparently'
  //         : a
  //     )
  //     .join(' ');
  ////////////////////////////////////////////!SECTION
  //   return str.replace(/\b(and|but)( apparently)?\b/g, '$1 apparently');
}

console.log(
  apparently(
    'It was great and I have never been on live television before but sometimes I dont watch this.'
  )
); //'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.'
console.log(apparently('and')); //'and apparently'
console.log(apparently('apparently')); //'apparently'
console.log(apparently('but apparently')); //'but apparently'
