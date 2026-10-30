/*
Description:

Your task is to take a given range and return an array of the prime numbers in that range.

You will write a function with the following parameters:

start is the integer from which your range starts. (inclusive)

end is the integer at which your range ends. (inclusive)

If the range does not contain any prime numbers return null.

Examples:

primes(5, 7)  // [5, 7]
primes(8, 9)  // null
primes(1, 10) // [2, 3, 5, 7]
*/
function primes(start, end) {
  const result = [];

  for (let i = Math.max(2, start); i <= end; i++) {
    if (isPrime(i)) result.push(i);
  }

  return result.length ? result : null;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
}

console.log(primes(1, 10)); //[2, 3, 5, 7]
console.log(primes(8, 10)); //null
console.log(primes(100, 200)); //[101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199]
