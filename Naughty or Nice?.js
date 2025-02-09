/*
Description:

In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'

Examples:

bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
whatListAmIOn(bad_actions)
#-> 'naughty'
good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
what_list_am_i_on(good_actions)
#-> 'nice'
actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
what_list_am_i_on(actions)
#-> 'naughty'
*/
function whatListAmIOn(actions) {
  const naughty = ['b', 'f', 'k'];
  const nice = ['g', 's', 'n'];
  let count = 0;

  actions.map((el) =>
    naughty.includes(el[0]) ? count-- : nice.includes(el[0]) ? count++ : el
  );

  return count <= 0 ? 'naughty' : 'nice';
}

var bad_actions = [
    "broke someone's window",
    'fought over a toaster',
    'killed a bug',
  ],
  good_actions = [
    'got someone a new car',
    'saved a man from drowning',
    'never got into a fight',
  ],
  actions = [
    'broke a vending machine',
    'never got into a fight',
    "tied someone's shoes",
  ];

console.log(whatListAmIOn(bad_actions)); //"naughty"
console.log(whatListAmIOn(good_actions)); //"nice"
console.log(whatListAmIOn(actions)); //"naughty"
