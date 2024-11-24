/*
Description:
Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

Example:

multipleSplit('Hi, how are you?', [' ']) => ['Hi,', 'how', 'are', 'you?']
multipleSplit('1+2-3', ['+', '-']) => ['1', '2', '3']
List of delimiters is optional and can be empty, so take that into account.

Important note: Result cannot contain empty string.
*/
function multipleSplit(string, delimiters = []) {
  const regExp = new RegExp('[' + delimiters.join('\\') + ']', 'g');

  return string.split(regExp).filter((el) => el);
  //////////////////////////////////////////!SECTION
  //   let arr = [string];

  //   for (let d of delimiters) {
  //     arr = arr.reduce((acc, el) => {
  //       return [...acc, ...el.split(d)];
  //     }, []);
  //   }

  //   return arr.filter(Boolean);
  //////////////////////////////////////////!SECTION
  //   return string.split(new RegExp(`[${delimiters.join(`\\`)}]`)).filter(Boolean);
  //////////////////////////////////////////!SECTION
  //   for (const char of delimiters) {
  //     string = string.split(char).join(',');
  //   }

  //   return string.split(',').filter(Boolean);
}

console.log(multipleSplit('Hi everybody!', [' ', '!'])); //['Hi', 'everybody']
console.log(multipleSplit('(1+2)*6-3^9', ['+', '-', '(', ')', '^', '*'])); //['1','2','6','3','9']
console.log(
  multipleSplit('Solve_this|kata-very\\quickly!', ['!', '|', '\\', '_', '-'])
);
//['Solve', 'this', 'kata', 'very', 'quickly']
