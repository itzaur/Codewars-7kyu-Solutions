/*
Description:
Two samurai generals are discussing dinner plans after a battle, but they can't seem to agree.
The discussion gets heated and you are cannot risk favoring either of them as this might damage your political standing with either of the two clans the samurai generals belong to. Thus, the only thing left to do is find what the common ground of what they are saying is.

Compare the proposals with the following function:

function commonGround(s1, s2)
The parameters s1 and s2 are the strings representing what each of the generals said. You should output a string containing the words in s1 that also occur in s2.

Each word in the resulting string shall occur once, and the order of the words need to follow the order of the first occurence of each word in s2.

If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")
*/
function commonGround(s1, s2) {
  return (
    s2.split` `.filter((el) => s1.split` `.includes(el)).join` ` || 'death'
  );
  ////////////////////////////////////////////!SECTION
  //   return (
  //     s1
  //       .split(' ')
  //       .filter((w) => s2.indexOf(w) != -1)
  //       .join(' ') || 'death'
  //   );
}

console.log(commonGround('eat chicken', 'eat chicken and rice')); //'eat chicken'
console.log(commonGround('eat a burger and drink a coke', 'drink a coke')); //'drink a coke'
console.log(commonGround('i like turtles', 'what are you talking about')); //'death'
