/*
Description:

This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)
*/
class Class {
  static getNumber() {
    return (this.number = this.number ? this.number * 2 : 1);
  }
}

console.log(Class.getNumber()); //1
console.log(Class.getNumber()); //2
console.log(Class.getNumber()); //4
console.log(Class.getNumber()); //8
console.log(Class.getNumber()); //16
