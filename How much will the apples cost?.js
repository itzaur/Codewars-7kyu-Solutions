/*
Description:

Buying in bulk is often cheaper than buying individual items. You will have to determine the total cost of apples. Write a function called apples that takes the arguments kilos and price. Purchases of 1 or more kilograms get a discount of 5%, purchases of 3 or more kilograms get a discount of 10%, purchases of 5 or more kilograms get a discount of 15%, and so on until you reach the maxium discount of 30%.
*/
function apples(kilos, price) {
  switch (true) {
    case kilos >= 9:
      return kilos * price * 0.75;
    case kilos >= 7:
      return kilos * price * 0.8;
    case kilos >= 5:
      return kilos * price * 0.85;
    case kilos >= 3:
      return kilos * price * 0.9;
    case kilos >= 1:
      return kilos * price * 0.95;
    default:
      return kilos * price;
  }
  //////////////////////////////////////!SECTION
  //   return kilos * price * (1 - 0.05 * Math.floor((1 + kilos) / 2));
}

console.log(apples(0.5, 2.98)); //1.49
console.log(apples(1, 6.7)); //6.365
console.log(apples(6, 2.75)); //14.025
console.log(apples(10, 4.16)); //31.2
console.log(apples(7, 9.89)); //55.384
