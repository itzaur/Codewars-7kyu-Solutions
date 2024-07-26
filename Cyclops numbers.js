/*
DESCRIPTION:
A cyclops number is a number in binary that is made up of all 1's, with one 0 in the exact middle. That means all cyclops numbers must have an odd number of digits for there to be an exact middle.
A couple examples:
101
11111111011111111
You must take an input, n, that will be in decimal format (base 10), then return True if that number wil be a cyclops number when converted to binary, or False if it won't.
Assume n will be a positive integer.

A test cases with the process shown:

cyclops (5)
"""5 in biinary"""
"0b101"
"""because 101 is made up of all "1"s with a "0" in the middle, 101 is a cyclops number"""
return True

cyclops(13)
"""13 in binary"""
"0b1101"
"""because 1101 has an even number of bits, it cannot be a cyclops"""
return False

cyclops(17)
"""17 in binary"""
"0b10001"
"""Because 10001 has more than 1 "0" it cannot be a cyclops number"""
return False
n will always be > 0.
*/
function cyclops(n) {
  return n
    .toString(2)
    .split('101')
    .every(
      (el, i, arr) =>
        arr.length > 1 && el == arr.at(-1) && el.length == arr.at(-1).length
    );
  //////////////////////////////!SECTION
  //   return /^(1+)0\1$/.test(n.toString(2));
}

console.log(cyclops(1)); //false
console.log(cyclops(5)); //true
console.log(cyclops(3)); //false
console.log(cyclops(13)); //false
console.log(cyclops(23)); //false
console.log(cyclops(27)); //true
console.log(cyclops(2015)); //true
console.log(cyclops(666)); //false
console.log(cyclops(42)); //false
console.log(cyclops(140737479966719)); //true
console.log(cyclops(35184367894526)); //false
