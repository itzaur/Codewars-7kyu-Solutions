/*
DESCRIPTION:
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/
function initializeNames(name) {
  const arrayOfNames = name.split` `;
  const { 0: firstName, [arrayOfNames.length - 1]: lastName } = arrayOfNames;
  const middleNames = arrayOfNames.slice(1, -1).map((el) => `${el[0]}.`)
    .join` `;

  const result =
    firstName !== lastName
      ? `${firstName} ${middleNames} ${lastName}`
      : firstName;

  return arrayOfNames.length > 2 ? result : name;

  //   return name
  //     .split` `
  //     .map((el, i, a) => (i == 0 || i == a.length - 1 ? e : el[0] + '.'))
  //     .join` `;
}

console.log(initializeNames('Jack Ryan')); //'Jack Ryan'
console.log(initializeNames('Lois Mary Lane')); //'Lois M. Lane'
console.log(initializeNames('Dimitri')); //'Dimitri'
console.log(initializeNames('Alice Betty Catherine Davis')); //'Alice B. C. Davis'
