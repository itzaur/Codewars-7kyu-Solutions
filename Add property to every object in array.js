/*
Description:
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
The questions array is already defined for you and is not the same as the one in the example.
*/

var questions = [
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 2,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 1,
    numAttempts: 3,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 1,
  },
  {
    question: 'Question',
    options: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    rightAns: 0,
    numAttempts: 0,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 0,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 10,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 1,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 5,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 1,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 0,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 6,
  },
];

questions.map((el) => Object.assign(el, { usersAnswer: null }));
//////////////////////////////////////////!SECTION
// questions.forEach(x => x.usersAnswer = null);
//////////////////////////////////////////!SECTION
// for (obj of questions) {
//   obj['usersAnswer'] = null;
// }
//////////////////////////////////////////!SECTION
// questions = questions.map((el) => ({ ...el, usersAnswer: null }));

console.log(questions[0].usersAnswer === null); //true
