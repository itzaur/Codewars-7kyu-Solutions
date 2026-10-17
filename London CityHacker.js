/*
Description:

You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']

Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

For example: 'Piccadilly', 56, 93, 243, 20, 14 -> "£6.90"

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx
*/
function londonCityHacker(journey) {
  const TUBE_COST = 2.4;
  const BUS_COST = 1.5;

  let totalCost = 0;
  let busCount = 0;

  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === 'string') {
      totalCost += TUBE_COST;
      busCount = 0;
    } else if (typeof journey[i] === 'number') {
      busCount++;

      if (busCount % 2 === 1) {
        totalCost += BUS_COST;
      }
    }
  }

  return `£${totalCost.toFixed(2)}`;
  ////////////////////////////!SECTION
  //   let sum = 0;

  //   for (let i = 0; i < journey.length; i++) {
  //     if (typeof journey[i] === 'string') sum += 2.4;
  //     else {
  //       sum += 1.5;
  //       if (typeof journey[i + 1] === 'number') i++;
  //     }
  //   }

  //   return `£${sum.toFixed(2)}`;
  ////////////////////////////!SECTION
  //   let busFare = 0;

  //   return `£${journey
  //     .map((v, i) =>
  //       isNaN(v) ? ((busFare = 0), 2.4) : (busFare = 1.5 - busFare),
  //     )
  //     .reduce((v, w) => v + w, 0)
  //     .toFixed(2)}`;
}

console.log(londonCityHacker([12, 'Central', 'Circle', 21])); //"£7.80"
console.log(londonCityHacker(['Piccadilly', 56])); //"£3.90"
console.log(londonCityHacker(['Northern', 'Central', 'Circle'])); //"£7.20"
console.log(londonCityHacker(['Piccadilly', 56, 93, 243])); //"£5.40"
console.log(londonCityHacker([386, 56, 1, 876])); //"£3.00"
console.log(londonCityHacker([])); //"£0.00"
