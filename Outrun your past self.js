/*
Description:

You are running a race on a circular race track against the ghost of your past self.

Each time you lap your ghost, you get a confidence boost because you realize how much faster you got.

Given your speed (km/h), your ghosts speed (km/h), the length of the circular race track (km) and the time you run (h), predict how often you will lap your ghost.

Lapping your ghost means going from being behind your ghost to being in front of your ghost.
*/
function number_lappings(my_speed, ghost_speed, time, round_length) {
  if (my_speed <= ghost_speed || time === round_length) return 0;

  const result = ((my_speed - ghost_speed) * time) / round_length;

  return my_speed > ghost_speed ? ~~result - (result % 1 ? 0 : 1) : 0;
  //////////////////////////////////////////////////!SECTION
  //   const laps = ((my_speed - ghost_speed) * time) / round_length;

  //   return Math.max(0, Math.ceil(laps) - 1);
}

console.log(number_lappings(1, 1, 100, 1)); //0
console.log(number_lappings(2, 1, 1000, 1000)); //0
console.log(number_lappings(0, 10, 1000, 1)); //0
console.log(number_lappings(14, 6, 2.5, 10)); //1
