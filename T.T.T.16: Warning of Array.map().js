/*
Description:
Task

Complete function warning, accept an array arr and a function func as arguments. if the funtion can be used for the array.map(), return "Passed!". If not, return "Failed!".
Examples

arr=[1, 2, 3]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=[1, 2, 3]  func= x=>x.toUpperCase()
warning(arr,func)  ===  "Failed!"

arr=["1","2","3"]  func= x=>x.toUpperCase()
warning(arr,func)  ===  "Passed!"

arr=["1","2","3"]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=["1","2","3"]  func= x=>x.toFixed(2)
warning(arr,func)  ===  "Failed!"

arr=["1","2","3"]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[[1],[2],[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[[1],[2],[3]]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=[true,false,true]  func = x=>x.toFixed(2)
warning(arr,func)  ===  "Failed!"

arr=[1,"2",[3]]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=["1","2",[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[1,"2",[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Failed!"

arr=[1,"2",[3]]  func= x=>x.noSuchAFunction()
warning(arr,func)  ===  "Failed!"
*/
function warning(arr, func) {
  try {
    arr.map(func);

    return 'Passed!';
  } catch (e) {
    return 'Failed!';
  }
}

let arr = [1, 2, 3];
let func = (x) => x + 1;
console.log(warning(arr, func)); //"Passed!"

arr = [1, 2, 3];
func = (x) => x.toUpperCase();
console.log(warning(arr, func)); //"Failed!"

arr = ['1', '2', '3'];
func = (x) => x.toUpperCase();
console.log(warning(arr, func)); //"Passed!"

arr = ['1', '2', '3'];
func = (x) => x + 1;
console.log(warning(arr, func)); //"Passed!"

arr = ['1', '2', '3'];
func = (x) => x.toFixed(2);
console.log(warning(arr, func)); //"Failed!"

arr = ['1', '2', '3'];
func = (x) => x.slice();
console.log(warning(arr, func)); //"Passed!"

arr = [[1], [2], [3]];
func = (x) => x.slice();
console.log(warning(arr, func)); //"Passed!"

arr = [[1], [2], [3]];
func = (x) => x + 1;
console.log(warning(arr, func)); //"Passed!"

arr = [true, false, true];
func = (x) => x.toFixed(2);
console.log(warning(arr, func)); //"Failed!"

arr = [1, '2', [3]];
func = (x) => x + 1;
console.log(warning(arr, func)); //"Passed!"

arr = ['1', '2', [3]];
func = (x) => x.slice();
console.log(warning(arr, func)); //"Passed!"

arr = [1, '2', [3]];
func = (x) => x.slice();
console.log(warning(arr, func)); //"Failed!"

arr = [1, '2', [3]];
func = (x) => x.noSuchAFunction();
console.log(warning(arr, func)); //"Failed!"
