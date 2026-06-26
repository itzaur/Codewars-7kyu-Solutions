/*
Description:
Error Throwing - Error Handling #2

Error Handling is very important in coding. Most error handling seems to be overlooked or not implemented properly.
Task

In this kata you are provided to evaluate a string, you must check for any HTML code (i.e. if any HTML tags are found), if any code is found you must return false, If the input is not a string you must throw a TypeError, if the string is over 255 characters long or contains 0 characters you must throw a RangeError and last of all if the string entered is null throw a ReferenceError.
Error Messages

ReferenceError

new ReferenceError('Message is null!')

TypeError

new TypeError(`Message should be of type string but was of type ${typeof msg}!`)

RangeError

new RangeError(`Message contains ${msg.length} characters!`)
*/
function validateMessage(msg) {
  switch (true) {
    case msg === null:
      throw new ReferenceError('Message is null!');
    case typeof msg !== 'string':
      throw new TypeError(
        `Message should be of type string but was of type ${typeof msg}!`,
      );
    case msg.length === 0 || msg.length > 255:
      throw new RangeError(`Message contains ${msg.length} characters!`);
    case /<[^>]*>/g.test(msg):
      return false;
    default:
      return true;
  }
}

console.log(validateMessage('<input>')); //false
console.log(validateMessage('Hiya!')); //true
console.log(validateMessage('How are ya doing?<br>Good!')); //false
console.log(validateMessage('Want to catch up sometime? <:')); //true
console.log(
  validateMessage(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque blandit turpis, tristique tincidunt eros vestibulum tincidunt. Quisque gravida, orci in placerat dapibus, diam orci gravida sem, ut euismod nibh neque vel est. Pelentesque posuere. ',
  ),
); //true
