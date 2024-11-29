/*
Description:
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
*/
function determineTime(durations) {
  const hour = 60;
  const rule = 24;
  const reducer = (arr) => arr.reduce((acc, el) => acc + el, 0);

  const array = durations.map((el) => el.split(':').map(Number));

  const hours = reducer(array.map((el) => el[0]));
  const minuts = reducer(array.map((el) => el[1]));
  const seconds = reducer(array.map((el) => el[2]));

  return hours + minuts / hour + seconds / hour <= rule;
  //////////////////////////////////////////////////////////!SECTION
  //   const seconds = 24 * 60 * 60;

  //   return (
  //     durations
  //       .map((el) => el.split(':'))
  //       .reduce((acc, [hours, minuts, sec]) => {
  //         return acc + hours * 60 * 60 + minuts * 60 + +sec;
  //       }, 0) <= seconds
  //   );
}

console.log(determineTime(['00:30:00', '02:30:00', '00:15:00'])); //true
console.log(determineTime([])); //true
console.log(determineTime(['04:30:00', '02:00:00', '01:30:00', '16:00:00'])); //true
console.log(determineTime(['12:00:00', '12:00:00'])); //true
console.log(determineTime(['12:00:00', '12:00:01'])); //false
console.log(determineTime(['06:00:00', '12:00:00', '06:30:00'])); //false
