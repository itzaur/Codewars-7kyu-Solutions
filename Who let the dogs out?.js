/*
Description:
I wanted to write some classes for dogs. In my model dogs either bark or sleep. I know that it is popular practice to set default values like this

var value = value || DEFAULT_VALUE
And so i did. But something is wrong, and I don't know why. Can you help me out?
*/
var BARK = 'woof woof';
var SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark) {
  return bark !== false ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark) {
  bark = bark || false;
  return bark ? BARK : SLEEP;
}

function dog_dont_bark_by_default(dont_bark) {
  return dont_bark === false ? BARK : SLEEP;
}

function dog_dont_bark_only_if_told_so(dont_bark) {
  dont_bark = dont_bark || false;
  return !dont_bark ? BARK : SLEEP;
}

console.log(dog_bark_only_if_told_so(true)); //woof woof
console.log(dog_bark_only_if_told_so(false)); //zzzzzzzzz....
console.log(dog_bark_only_if_told_so()); //zzzzzzzzz....

console.log(dog_dont_bark_only_if_told_so(true)); //zzzzzzzzz....
console.log(dog_dont_bark_only_if_told_so(false)); //woof woof
console.log(dog_dont_bark_only_if_told_so()); //woof woof

console.log(dog_dont_bark_by_default()); //zzzzzzzzz....
console.log(dog_dont_bark_by_default(false)); //woof woof

console.log(dog_bark_by_default()); //woof woof
console.log(dog_bark_by_default(false)); //zzzzzzzzz....
