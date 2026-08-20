/*
Description:

Your task is to extend JavaScript Number object with methods .add(n), .sub(n), .mul(n), .div(n), .pow(n) and .sqr(), so you can perform simple mathematical operations on numbers just like this:

var n = 25;

n.add(4);  // 29   (addition)
n.sub(3);  // 22   (subtraction)
n.mul(2);  // 50   (multiplication)
n.div(5);  // 5    (division)
n.pow(2);  // 625  (power)
n.sqr();   // 5    (square root)

Also, you should be able to fluently chain these methods:

var n = 25;

n.add(5).div(2).mul(3).sub(35).pow(2).sqr();  // 10
*/
const methods = {
  add(n) {
    return this + n;
  },
  sub(n) {
    return this - n;
  },
  mul(n) {
    return this * n;
  },
  div(n) {
    return this / n;
  },
  pow(n) {
    return Math.pow(this, n);
  },
  sqr() {
    return Math.sqrt(this);
  },
};

Object.assign(Number.prototype, methods);

var n = 25;
console.log(n.add(4)); //29
console.log(n.sub(3)); //22
console.log(n.mul(2)); //50
console.log(n.div(5)); //5
console.log(n.pow(2)); //625
console.log(n.sqr()); //5
console.log(n.add(5).div(2).mul(3).sub(35).pow(2).sqr()); //10
