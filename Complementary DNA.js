/*
Description:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
function dnaStrand(dna) {
  return [...dna].map((el) =>
    el === 'A'
      ? 'T'
      : el === 'T'
      ? 'A'
      : el === 'C'
      ? 'G'
      : el === 'G'
      ? 'C'
      : el
  ).join``;
  ////////////////////////////////////////!SECTION
  //   const pairs = {
  //     A: 'T',
  //     T: 'A',
  //     C: 'G',
  //     G: 'C',
  //   };
  //   return dna.replace(/./g, (c) => pairs[c]);
  ////////////////////////////////////////!SECTION
  //   return dna
  //     .replace(/A/g, 't')
  //     .replace(/T/g, 'a')
  //     .replace(/C/g, 'g')
  //     .replace(/G/g, 'c')
  //     .toUpperCase();
  ////////////////////////////////////////!SECTION
  //   dna.replace(/./g, (m) => 'CGAT'['GCTA'.indexOf(m)]);
  ////////////////////////////////////////!SECTION
  // return dna.replace(/[ATCG]/g, val => ({A : `T`, T : `A`, C : `G`, G : `C`})[val]);
}

console.log(dnaStrand('AAAA')); //"TTTT"
console.log(dnaStrand('ATTGC')); //"TAACG"
console.log(dnaStrand('GTAT')); //"CATA"
