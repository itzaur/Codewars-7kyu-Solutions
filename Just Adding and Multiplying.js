/*
Description:

Question: Can you get to the number 59 from the number 1, by sequentially either adding 5 or multiplying by 7?

Answer: yes! 59 = 1 x7 x7 +5 +5

Your task is to implement the more general function:

canReach(aim, add, mult)

It returns a boolean value, indicating whether it is possible to reach the number aim from the number 1, by sequentially either adding add or multiplying by mult.

So e.g.

canReach(59, 5, 7) // returns True

N.B. Assume aim, add, and mult will always be positive integers.
*/
function canReach(n, add, mult) {
  const count = 1;
  const set = new Set();

  function helper(current) {
    if (current === n) return true;

    if (current > n || set.has(current)) return false;

    set.add(current);

    return helper(current + add) || helper(current * mult);
  }

  return helper(count);
}
////////////////////////////!SECTION
// const canReach = (n, add, mult) => {
//   if (mult === 1) return (n - 1) % add === 0;

//   for (let i = 1; i <= n; i *= mult) if ((n - i) % add === 0) return true;

//   return false;
// };

console.log(canReach(59, 5, 7)); //true
console.log(canReach(10, 5, 3)); //false
console.log(canReach(100, 1, 1)); //true
