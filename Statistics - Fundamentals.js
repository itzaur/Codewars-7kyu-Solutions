/*
Description:
Statistics - Fundamentals
Task
Create a class, DataSet, that has the following properties and methods:

data - Contains an array of the data
mean - Contains the value of the mean average of the data
variance - Contains the value of the variance of the data
stdDeviation - Contains the standard deviation of the data
setMean() - A function that calculates the mean, updates this.mean and returns the value of the mean
setVar() - Sets/resets the variance and the standard deviation of the data set and returns the variance
For example, if I initiate a DataSet with the following data:

var myData = new DataSet(1,2,3,4,5,6,7);
... the following properties will be automatically set:

myData.data === [1,2,3,4,5,6,7];
myData.mean === 4
myData.variance === 4
myData.stdDeviation === 2
Furthermore, if I then alter some of the entries in myData.data and then call the functions setMean() and setVar(), the mean, standard deviation and variance of the data should be recalculated and the value of the new mean and variance returned.

Notes
Regarding Float Handling and Precision
In this Kata, the computed values of your variance and stdDeviation need only be correct to 3 decimal places (the author's solution being the standard for correct values) so you may assume float arithmetic is commutative.
*/
class DataSet {
  constructor(...data) {
    this.data = data;
    this.mean = this.setMean();
    this.variance = this.setVar();
    this.stdDeviation = Math.sqrt(this.variance);
  }

  setMean() {
    return (this.mean =
      this.data.reduce((acc, el) => acc + el, 0) / this.data.length);
  }

  setVar() {
    this.variance =
      this.data.reduce((acc, el) => acc + Math.pow(el - this.mean, 2), 0) /
      this.data.length;

    this.stdDeviation = Math.sqrt(this.variance);

    return this.variance;
  }
}

var myData1 = new DataSet(1, 2, 3, 4, 5, 6, 7);
console.log(myData1.data); //[1,2,3,4,5,6,7]
console.log(myData1.mean); //4
console.log(myData1.variance); //4
console.log(myData1.stdDeviation); //2
myData1.data[6] = 14;
console.log(myData1.setMean()); //5
console.log(myData1.mean); //5
console.log(myData1.setVar()); //16
console.log(myData1.variance); //16
console.log(myData1.stdDeviation); //4
