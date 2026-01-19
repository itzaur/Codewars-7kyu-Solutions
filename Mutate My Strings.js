/*
Description:

I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/
function mutateMyStrings(stringOne, stringTwo) {
  let result = ``;
  let array = stringOne.split``;

  for (let i = 0; i < stringTwo.length; i++) {
    if (array[i] !== stringTwo[i]) {
      array[i] = stringTwo[i];
      result += array.join`` + '\n';
    }
  }

  return stringOne + '\n' + result;
  ////////////////////////////////////////!SECTION
  //   return [
  //     ...new Set(
  //       [...`${stringOne} `].map(
  //         (_, idx) => `${stringTwo.slice(0, idx)}${stringOne.slice(idx)}\n`,
  //       ),
  //     ),
  //   ].join(``);
}

console.log(mutateMyStrings('bubble gum', 'turtle ham')); //'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n'
