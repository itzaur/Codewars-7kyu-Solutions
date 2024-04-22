/*
DESCRIPTION:
You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake one minute on each side. What is the minimum time you need to cook n pancakes, if you can put on the frying pan only m pancakes at a time? n and m are positive integers between 1 and 1000.
*/
function cookPancakes(n, m) {
  const fryTime = 2;

  return n <= m ? fryTime : Math.ceil((n * fryTime) / m);
  //////////////////!SECTION
  //   return Math.max(Math.ceil((n * 2) / m), 2);
}

console.log(cookPancakes(1, 2)); //2
console.log(cookPancakes(2, 2)); //2
console.log(cookPancakes(3, 2)); //3
console.log(cookPancakes(4, 2)); //4
console.log(cookPancakes(4, 3)); //3
console.log(cookPancakes(505, 538)); //2
console.log(cookPancakes(688, 499)); //3
console.log(cookPancakes(723, 319)); //5
