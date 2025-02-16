/*
Description:
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/
function removeDuplicateWords(s) {
  return [...new Set(s.split` `)].join` `;
  //////////////////////////////////!SECTION
  //   return s.replace(/\s(\w+)\b(?<=\b\1\b.*\1)/g, '');
  //////////////////////////////////!SECTION
  //   return [...s.split` `.reduce((s, w) => s.add(w), new Set())].join` `;
}

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
); //'alpha beta gamma delta'
