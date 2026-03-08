/*
Description:

In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
You will be given three parameters :

    first the first term in the sequence
    c the constant that you are going to ADD ( since it is an arithmetic sequence...)
    l the number of terms that should be returned

Useful link: Sequence

Be sure to check out my Arithmetic sequence Kata first ;)
Don't forget about the indexing pitfall ;)
*/
function seqlist(first, c, l) {
  return Array.from({ length: l }, (_, i) => first + i * c);
}

console.log(seqlist(0, 1, 20)); //[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
console.log(seqlist(2, 2, 10)); //10,12,14,16,18,20]
console.log(seqlist(-12, 3, 4)); //[-12, -9, -6, -3]
console.log(seqlist(4, 0, 15)); //[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
console.log(seqlist(0, -5, 8)); //[0,-5,-10,-15,-20,-25,-30,-35]
console.log(seqlist(100, -7, 10)); //[100, 93, 86, 79, 72, 65, 58, 51, 44, 37]
