/*
Description:
Rules

You must check if some ticket numbers are valid. To be valid, a ticket number must :

    Contain exactly 6 characters
    Contain : one letter then one digit then 4 letters

'letter' means a single character, unaccented, uppercase or lowercase, between a and z.
Input arguments

    tickets : an array of string, representing ticket numbers

Return value
An integer representing the number of valid ticket numbers.
*/
function nbrValidTickets(tickets) {
  const length = 6;

  return tickets.filter(
    (ticket) =>
      /^[a-zA-Z]\d[a-zA-Z]{4}$/.test(ticket) && ticket.length === length
  ).length;
}

console.log(
  nbrValidTickets([
    'A9JZOD',
    'E9FIDH',
    'SI2JIS',
    'F8JIODJ',
    'FDSNJA',
    'A9POF?',
    'AA9DIJD',
  ])
); //2
