/*
Description:

Grinch wants to spoil Christmas for JavaScript programmers. For that, he devised a hellish plan: pollute their Date prototype so that Christmas never happens. He wants to change method getDate of Date so that it returns 26 for Date objects that represent 25th of December but works correctly for all other days of the year.

However, Grinch does not know how to do that. Can you help him?
*/
Date.prototype.getDate = function getGrinchDate() {
  const day = this.getUTCDate();
  const month = this.getUTCMonth();
  const date = new Date(this.getTime());

  return month === 11 && day === 25 ? 26 : date.getUTCDate();
  //////////////////////////////!SECTION
  //   const month = this.getMonth();
  //   const date = this.getUTCDate();

  //   return month == 11 && date == 25 ? 26 : date;
};

let d = new Date('1957-10-25');
console.log(d.getMonth()); //9
console.log(d.getDate()); //25
