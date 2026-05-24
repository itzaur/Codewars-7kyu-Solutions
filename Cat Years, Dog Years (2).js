/*
Description:

This is related to my other Kata about cats and dogs.
Kata Task

I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

    Results are truncated whole numbers of "human" years

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that

*/
var ownedCatAndDog = function (catYears, dogYears) {
  let catYearsResult;
  let dogYearsResult;

  switch (true) {
    case catYears < 15:
      catYearsResult = 0;
      break;
    case catYears < 24:
      catYearsResult = 1;
      break;
    default:
      catYearsResult = 2 + ~~((catYears - 24) / 4);
  }

  switch (true) {
    case dogYears < 15:
      dogYearsResult = 0;
      break;
    case dogYears < 24:
      dogYearsResult = 1;
      break;
    default:
      dogYearsResult = 2 + ~~((dogYears - 24) / 5);
  }

  return [catYearsResult, dogYearsResult];
};
//////////////////////////////////////////!SECTION
// const ownedCatAndDog = (catYears, dogYears) =>
//   [
//     catYears < 24 ? catYears / 15 : (catYears - 16) / 4,
//     dogYears < 24 ? dogYears / 15 : (dogYears - 14) / 5,
//   ].map(Math.floor);
//////////////////////////////////////////!SECTION
// const ownedCatAndDog = (...pets) =>
//   pets.map((petYears, i) => {
//     if (petYears < 15) return 0;
//     if (petYears < 24) return 1;

//     return 2 + Math.floor((petYears - 24) / (4 + i));
//   });
//////////////////////////////////////////!SECTION
// const ownedCatAndDog = (...args) =>
//   args.map((petYears, i) => {
//     if (petYears < 15) return 0;

//     if (petYears < 24) return 1;

//     return 2 + Math.floor((petYears - 24) / (4 + i));
//   });

console.log(ownedCatAndDog(15, 15)); //[1,1]
console.log(ownedCatAndDog(24, 24)); //[2,2]
console.log(ownedCatAndDog(56, 64)); //[10,10]
