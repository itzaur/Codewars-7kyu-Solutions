/*
DESCRIPTION:
Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive
Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .

autoMorphic (13) -->> return "Not!!"
Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69 .

autoMorphic (76) -->> return "Automorphic"
Explanation:
76 squared is 5776 , Ends with the same number's digits which are 76 .

autoMorphic (225) -->> return "Not!!"
Explanation:
225 squared is 50625 , Not ending with the same number's digits which are 225 .

autoMorphic (625) -->> return "Automorphic"
Explanation:
625 squared is 390625 , Ends with the same number's digits which are 625 .

autoMorphic (1) -->> return "Automorphic"
Explanation:
1 squared is 1 , Ends with the same number's digits which are 1 .

autoMorphic (6) -->> return "Automorphic"
Explanation:
6 squared is 36 , Ends with the same number's digits which are 6
*/
function automorphic(n) {
  const length = `${n}`.length;

  return [...`${n ** 2}`].join``.slice(-length) == n ? 'Automorphic' : 'Not!!';
  ////////////////////////!SECTION
  //   return String(n * n).endsWith(String(n)) ? 'Automorphic' : 'Not!!';
}

console.log(automorphic(1)); //'Automorphic'
console.log(automorphic(3)); //'Not!!'
console.log(automorphic(6)); //'Automorphic'
console.log(automorphic(9)); //'Not!!'
console.log(automorphic(25)); //'Automorphic'
console.log(automorphic(53)); //'Not!!'
console.log(automorphic(76)); //'Automorphic'
console.log(automorphic(95)); //'Not!!'
console.log(automorphic(625)); //'Automorphic'
console.log(automorphic(225)); //'Not!!'
