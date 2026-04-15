/*
Description:

You are the judge at a competitive eating competition and you need to choose a winner!

There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

    Chickenwings: 5 points

    Hamburgers: 3 points

    Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]

It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]

Happy judging!
*/
function scoreboard(whoAteWhat) {
  return whoAteWhat
    .map((el) => ({
      name: el.name,
      score: el.chickenwings * 5 + el.hamburgers * 3 + el.hotdogs * 2,
    }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

let whoAteWhat = [
  { name: 'Billy The Beast', chickenwings: 17, hamburgers: 7, hotdogs: 8 },
  { name: 'Habanero Hillary', chickenwings: 5, hamburgers: 17, hotdogs: 11 },
  { name: 'Joey Jaws', chickenwings: 8, hamburgers: 8, hotdogs: 15 },
  { name: 'Big Bob', chickenwings: 20, hamburgers: 4, hotdogs: 11 },
];

let result = [
  { name: 'Big Bob', score: 134 },
  { name: 'Billy The Beast', score: 122 },
  { name: 'Habanero Hillary', score: 98 },
  { name: 'Joey Jaws', score: 94 },
];

console.log(scoreboard(whoAteWhat)); //result
console.log(
  scoreboard([
    { name: 'Big Bob', chickenwings: 20, hamburgers: 4, hotdogs: 11 },
  ]),
); //[{name: "Big Bob", score: 134}]
console.log(
  scoreboard([
    { name: 'Joey Jaws', chickenwings: 8, hamburgers: 8, hotdogs: 15 },
    { name: 'Big Bob', chickenwings: 20, hamburgers: 4, hotdogs: 11 },
  ]),
); //[{name: "Big Bob", score: 134},{name: "Joey Jaws", score: 94}]
console.log(
  scoreboard([
    { name: 'Joey Jaws', chickenwings: 0, hamburgers: 1, hotdogs: 1 },
    { name: 'Big Bob', chickenwings: 1, hamburgers: 0, hotdogs: 0 },
  ]),
); //[{name: "Big Bob", score: 5},{name: "Joey Jaws", score: 5}]
console.log(scoreboard([])); //[]
