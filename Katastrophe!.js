/*
Description:
You have been employed by the Japanese government to write a function that tests whether or not a building is strong enough to withstand a simulated earthquake.

A building will fall if the magnitude of the earthquake is greater than the strength of the building.

An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave, and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves. A shockwave is equal to the sum of the values of its tremors.

Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735

A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year. For more info on exponential decay, follow this link - https://en.wikipedia.org/wiki/Exponential_decay

Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.
*/
function strongEnough(earthquake, age) {
  const strength = 1000;
  const condition = strength * (1 - 0.01) ** age;
  const result = earthquake
    .map((el) => el.reduce((acc, el) => acc + el, 0))
    .reduce((acc, el) => acc * el);

  return result > condition ? 'Needs Reinforcement!' : 'Safe!';
  //////////////////////////////////////////////////!SECTION
  //   return earthquake.reduce(
  //     (pre, val) => pre * val.reduce((pre, val) => pre + val),
  //     1
  //   ) <
  //     1000 * 0.99 ** age
  //     ? `Safe!`
  //     : `Needs Reinforcement!`;
}

console.log(
  strongEnough(
    [
      [2, 3, 1],
      [3, 1, 1],
      [1, 1, 2],
    ],
    2
  )
); //"Safe!"
console.log(
  strongEnough(
    [
      [5, 8, 7],
      [3, 3, 1],
      [4, 1, 2],
    ],
    2
  )
); //"Safe!"
console.log(
  strongEnough(
    [
      [5, 8, 7],
      [3, 3, 1],
      [4, 1, 2],
    ],
    3
  )
); //"Needs Reinforcement!"
