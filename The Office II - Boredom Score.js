/*
Description:
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/
function boredom(staff) {
  const scores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    pissingAbout: 25,
  };

  const result = Object.entries(staff)
    .map(([_, value]) => scores[value] || scores.pissingAbout)
    .reduce((acc, el) => acc + el, 0);

  console.log(result);

  return result <= 80
    ? 'kill me now'
    : result < 100
    ? 'i can handle this'
    : 'party time!!';
  //////////////////////////////////////////////////////!SECTION
  //   const score = {
  //     accounts: 1,
  //     finance: 2,
  //     canteen: 10,
  //     regulation: 3,
  //     trading: 6,
  //     change: 6,
  //     IS: 8,
  //     retail: 5,
  //     cleaning: 4,
  //     'pissing about': 25,
  //   };

  //   const answer = ['kill me now', 'i can handle this', 'party time!!'];
  //   const s = Object.values(staff)
  //     .map((x) => score[x])
  //     .reduce((a, b) => a + b, 0);

  //   return answer[s <= 80 ? 0 : s < 100 ? 1 : 2];
}
//////////////////////////////////////////////////////!SECTION
// const boredom = (staff) =>
//   ((val) =>
//     val <= 80
//       ? `kill me now`
//       : val >= 100
//       ? `party time!!`
//       : `i can handle this`)(
//     Object.values(staff).reduce(
//       (pre, val) =>
//         pre +
//         {
//           accounts: 1,
//           finance: 2,
//           canteen: 10,
//           regulation: 3,
//           trading: 6,
//           change: 6,
//           IS: 8,
//           retail: 5,
//           cleaning: 4,
//           'pissing about': 25,
//         }[val],
//       0
//     )
//   );

console.log(
  boredom({
    tim: 'change',
    jim: 'accounts',
    randy: 'canteen',
    sandy: 'change',
    andy: 'change',
    katie: 'IS',
    laura: 'change',
    saajid: 'IS',
    alex: 'trading',
    john: 'accounts',
    mr: 'finance',
  })
); //'kill me now'
console.log(
  boredom({
    tim: 'IS',
    jim: 'finance',
    randy: 'pissing about',
    sandy: 'cleaning',
    andy: 'cleaning',
    katie: 'cleaning',
    laura: 'pissing about',
    saajid: 'regulation',
    alex: 'regulation',
    john: 'accounts',
    mr: 'canteen',
  })
); //'i can handle this'
console.log(
  boredom({
    tim: 'accounts',
    jim: 'accounts',
    randy: 'pissing about',
    sandy: 'finance',
    andy: 'change',
    katie: 'IS',
    laura: 'IS',
    saajid: 'canteen',
    alex: 'pissing about',
    john: 'retail',
    mr: 'pissing about',
  })
); //'party time!!'
