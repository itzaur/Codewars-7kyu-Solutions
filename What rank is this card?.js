/*
Description:
What is the rank of a playing card? The function takes a string like '2c' or 'Kh' and returns a value based on rank of the card. The first character corresponds to the rank of the card and the second character corresponds to the suit of the card. Cards 2-9 should return the corresponding number. T returns 10, J => 11, Q => 12, K => 13 and A => 14. Otherwise the rank should be returned as 0.

For example:

rank('2c') == 2;
rank('Tc') == 10;
rank('As') == 14;
rank('1c') == 0; // There is no card '1'
Suits can be disregarded.
*/
function rank(card) {
  switch (card[0]) {
    case '2':
      return 2;
    case '3':
      return 3;
    case '4':
      return 4;
    case '5':
      return 5;
    case '6':
      return 6;
    case '7':
      return 7;
    case '8':
      return 8;
    case '9':
      return 9;
    case 'A':
      return 14;
    case 'K':
      return 13;
    case 'Q':
      return 12;
    case 'J':
      return 11;
    case 'T':
      return 10;
    default:
      return 0;
  }
  ////////////////////////////////!SECTION
  //   return (
  //     [
  //       '',
  //       '2',
  //       '3',
  //       '4',
  //       '5',
  //       '6',
  //       '7',
  //       '8',
  //       '9',
  //       'T',
  //       'J',
  //       'Q',
  //       'K',
  //       'A',
  //     ].indexOf(card[0]) + 1
  //   );
}

console.log(rank('2s')); //2
console.log(rank('7h')); //7
console.log(rank('Jc')); //11
console.log(rank('Ad')); //14
console.log(rank('1d')); //0
