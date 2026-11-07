/*
Description:

Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.
Examples

5   =>  7
12  =>  13
*/
function nextPrime(n) {
  function isPrime(number) {
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }

    return number > 1;
  }

  let nextPrimeNumber = n + 1;

  while (!isPrime(nextPrimeNumber)) {
    nextPrimeNumber++;
  }

  return nextPrimeNumber;
}
////////////////////////////////////////!SECTION
// const nextPrime = (n) => {
//   if (n++ < 2) return 2;
//   for (let i = 2; i <= n ** 0.5; i++) if (!(n % i)) return nextPrime(n);
//   return n;
// };

console.log(nextPrime(0)); //2
console.log(nextPrime(1)); //2
console.log(nextPrime(2)); //3
console.log(nextPrime(3)); //5
console.log(nextPrime(5)); //7
console.log(nextPrime(11)); //13
console.log(nextPrime(17)); //19
console.log(nextPrime(2971)); //2999
