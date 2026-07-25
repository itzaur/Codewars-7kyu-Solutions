/*
Description:

You have recently discovered that horses travel in a unique pattern - they're either running (at top speed) or resting (standing still).

Here's an example of how one particular horse might travel:

    The horse Blaze can run at 14 metres/second for 60 seconds, but must then rest for 45 seconds.
    After 500 seconds Blaze will have traveled 4200 metres.

Your job is to write a function that returns how far a horse will have traveled after a given time.
Input:

    totalTime - How long the horse will be traveling (in seconds)

    runTime - How long the horse can run for before having to rest (in seconds)

    restTime - How long the horse have to rest for after running (in seconds)

    speed - The max speed of the horse (in metres/second)
*/
function travel(totalTime, runTime, restTime, speed) {
  return (
    (~~(totalTime / (runTime + restTime)) * runTime +
      Math.min(totalTime % (runTime + restTime), runTime)) *
    speed
  );
  ////////////////////////////////////////////////!SECTION
  //   let traveled = 0;

  //   while (totalTime > 0) {
  //     const run = Math.min(runTime, totalTime);
  //     traveled += speed * run;
  //     totalTime -= run + restTime;
  //   }

  //   return traveled;
}

console.log(travel(1000, 10, 127, 14, 1120));
console.log(travel(100, 10, 0, 10, 1000));
