/*
DESCRIPTION:
Step through my green glass door.

You can take the moon, but not the sun.

You can take your slippers, but not your sandals.

You can go through yelling, but not shouting.

You can't run through fast, but you can run with speed.

You can take a sheet, but not your blanket.

You can wear your glasses, but not your contacts.

Have you figured it out? Good! Then write a program that can figure it out as well.
*/
function stepThroughWith(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result.some((el) => el === true);

  //   return [...s].reduce((acc, el, i) => {
  //     return el === s[i + 1] ? true : acc;
  //   }, false);

  // return /(.)\1/.test(s)

  //   return [...s].some((el, i) => el === s[i + 1]);
}

console.log(stepThroughWith('moon')); //true
console.log(stepThroughWith('test')); //false
console.log(stepThroughWith('glasses')); //true
console.log(stepThroughWith('airplane')); //false
console.log(stepThroughWith('free')); //true
console.log(stepThroughWith('branch')); //false
