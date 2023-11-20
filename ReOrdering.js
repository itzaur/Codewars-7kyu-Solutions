/*
DESCRIPTION:
There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Examples
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
*/
function reOrdering(text) {
  let result = '';
  text.split` `.map((el) =>
    el[0].toUpperCase() === el[0] ? (result += el) : null
  );

  return [result, ...text.split` `.filter((el) => el !== result)].join` `;

  //   return text.replace(/^(.*) ([A-Z]\w*)(.*)$/, `$2 $1$3`);

  //   return text.split` `.reduce((acc, el) => {
  //     return el[0] === el[0].toUpperCase() ? `${el} ${acc}` : `${acc} ${el}`;
  //   });
}

console.log(reOrdering('ming Yao')); //'Yao ming'
console.log(reOrdering('Mano donowana')); //'Mano donowana'
console.log(reOrdering('wario LoBan hello')); //'LoBan wario hello'
console.log(reOrdering('bull color pig Patrick')); //'Patrick bull color pig'
console.log(reOrdering('jojo ddjajdiojdwo ana G nnibiial')); //'G jojo ddjajdiojdwo ana nnibiial'
console.log(
  reOrdering('is one of those rare names that s both exotic and simple Adira')
); //'Adira is one of those rare names that s both exotic and simple'
console.log(
  reOrdering('is an older name than annabel Amabel and a lot more distinctive')
); //'Amabel is an older name than annabel and a lot more distinctive'
console.log(reOrdering('JoJo')); //'JoJo'
console.log(reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z')); //'Z a b c d e f g h i j k l m n o p q r s t u v w x y'
console.log(reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z')); //'N a b c d e f g h i j k l m o p q r s t u v w x y z'
