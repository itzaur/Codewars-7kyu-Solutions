/*
Description:
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/
function getAges(sum, difference) {
  const max = sum - (sum - difference) / 2;
  const min = (sum - difference) / 2;

  return max >= 0 && min >= 0 && (sum >= 0) & (difference >= 0)
    ? [max, min]
    : null;
  //////////////////////////////////////!SECTION
  //   return sum < 0 || difference < 0 || sum < difference
  //     ? null
  //     : [(sum + difference) / 2, (sum - difference) / 2];
}

console.log(getAges(24, 4)); //[14,10]
console.log(getAges(63, -14)); //null
console.log(getAges(-22, 15)); //null
