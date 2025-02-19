/*
Description:

Oh No!

The song sheets have been dropped in the snow and the lines of each verse have become all jumbled up.
Task

You have to write a comparator function which can sort the lines back into their correct order, otherwise Christmas will be cancelled!

Reminder: Below is what the final verse should look like

On the 12th day of Christmas my true love gave to me
12 drummers drumming,
11 pipers piping,
10 lords a leaping,
9 ladies dancing,
8 maids a milking,
7 swans a swimming,
6 geese a laying,
5 golden rings,
4 calling birds,
3 French hens,
2 turtle doves and
a partridge in a pear tree.

Background

A Java comparator function is described as below. Other languages are similar:

    int compare(T o1, T o2) Compares its two arguments for order. Returns a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater than the second.
*/
var comparator = function (a, b) {
  var options = [
    'On the 12th day of Christmas my true love gave to me',
    '12 drummers drumming,',
    '11 pipers piping,',
    '10 lords a leaping,',
    '9 ladies dancing,',
    '8 maids a milking,',
    '7 swans a swimming,',
    '6 geese a laying,',
    '5 golden rings,',
    '4 calling birds,',
    '3 French hens,',
    '2 turtle doves and',
    'a partridge in a pear tree.',
  ];

  return options.indexOf(a) - options.indexOf(b);
  //////////////////////////////////////////!SECTION
  //   const pos = [
  //     'On',
  //     '12',
  //     '11',
  //     '10',
  //     '9',
  //     '8',
  //     '7',
  //     '6',
  //     '5',
  //     '4',
  //     '3',
  //     '2',
  //     'a',
  //   ];

  //   return pos.indexOf(a.split(' ')[0]) - pos.indexOf(b.split(' ')[0]);
};

var shuffle = function (list) {
  var shuffled = [];
  for (var i = 0; i < list.length; i++) shuffled.push(list[i]);
  for (var i = 0; i < shuffled.length; i++) {
    if (Math.random() > 0.5) {
      j = (i + 3) % shuffled.length;
      // swap lines i & j
      var tmp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = tmp;
    }
  }
  return shuffled;
};

var display = function (list) {
  for (var i in list) {
    console.log(list[i]);
  }
  return list;
};

var lines = [
  'On the 12th day of Christmas my true love gave to me',
  '12 drummers drumming,',
  '11 pipers piping,',
  '10 lords a leaping,',
  '9 ladies dancing,',
  '8 maids a milking,',
  '7 swans a swimming,',
  '6 geese a laying,',
  '5 golden rings,',
  '4 calling birds,',
  '3 French hens,',
  '2 turtle doves and',
  'a partridge in a pear tree.',
];

var shuffled = shuffle(lines);
console.log('SHUFFLED:');
display(shuffled);
var actual = shuffled.sort(comparator);
var expected = lines;

console.log(actual);
