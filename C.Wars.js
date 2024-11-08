/*
Description:
A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.

Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

See the pattern below:

"code wars"            ---> "C.Wars"
"Barack hussein obama" ---> "B.H.Obama"
Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
*/
function initials(n) {
  return (
    n.split` `.map((el) => el[0].toUpperCase()).join`.`.slice(0, -1) +
    n.split` `.slice(-1)[0][0].toUpperCase() +
    n.split` `.slice(-1).join``.slice(1)
  );
  ////////////////////////////////////////!SECTION
  //   return n
  //     .replace(/\b\w/gi, (m) => m.toUpperCase())
  //     .replace(/\w+\s/gi, (m) => m[0] + '.');
  ////////////////////////////////////////!SECTION
  //   return n
  //     .split(' ')
  //     .map(
  //       (v, i, a) =>
  //         v.charAt(0).toUpperCase() + (i == a.length - 1 ? v.slice(1) : '.')
  //     )
  //     .join('');
}

console.log(initials('code wars')); //'C.Wars'
console.log(initials('Barack hussain obama')); //'B.H.Obama'
console.log(initials('barack hussain Obama')); //'B.H.Obama'
