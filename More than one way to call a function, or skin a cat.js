/*
Description:

Write a single function that can be invoked by either

```javascript

sum(2,3); //5 //or sum(2)(3); //5```

clojure (sum 2 3) ;; 5 ;;or ((sum 2) 3) ;; 5

Both of these examples should return the sum of the 2 numbers.
*/
function sum(a, b) {
  return b !== undefined
    ? a + b
    : function (arg) {
        return a + arg;
      };
}

console.log(sum(2, 3)); //5
console.log(sum(3)(3)); //6
