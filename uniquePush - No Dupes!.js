/*
Description:

Write a function that will take an array and a person object as parameters. The function will only push a "person" object onto the end of an array if someone with that phone number doesn't already exist in that array.

-A "person" is a javascript object with a name and a phoneNumber : {name:'SomeName', phoneNumber:1234567890}
-A duplicate person object is an object with the same phoneNumber as someone else

If the person object is unique, push them onto the end of the array, and return true.
If the person object is NOT unique, don't push them to the array and return false;
If the person doesn't have a phoneNumber, don't add them to the array and return false.
*/
function uniquePush(arr, obj) {
  return arr.some((person) => person.phoneNumber === obj.phoneNumber) ||
    !obj.phoneNumber
    ? false
    : (arr.push(obj), true);
}
////////////////////////////////////////////!SECTION
// const uniquePush = (arr, obj) =>
//   !!(
//     obj.phoneNumber &&
//     !arr.some((val) => val.phoneNumber === obj.phoneNumber) &&
//     arr.push(obj)
//   );

const arr = [];
const bob = { name: 'bob', phoneNumber: 1234 };
const joe = { name: 'joe', phoneNumber: 12345 };

let added = uniquePush(arr, { ...bob });
console.log(added); //true
console.log(arr.length); //1
console.log(arr); //[bob]

added = uniquePush(arr, { ...joe });
console.log(added); //true
console.log(arr.length); //2
console.log(arr); //[bob, joe]

const added = uniquePush(arr, { ...bob });
console.log(added); //false
console.log(arr.length); //2
console.log(arr); //[bob, joe]

uniquePush(arr); //{...joe}

const dupeJoe = { name: 'I am duped', phoneNumber: 12345 };

uniquePush(arr); //{...dupeJoe}
uniquePush(arr); //{...dupeJoe}
console.log(arr); //[bob, joe]

const bad = { name: 'bad' };
const added = uniquePush(arr, { ...bad });
console.log(added); //false
console.log(arr.length); //2
console.log(arr); //[bob, joe]
