/*
DESCRIPTION:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/
function removeUrlAnchor(url) {
  return url.split('#')[0];

  //   return url.replace(/#.*/gi,"");
  //   return url.replace(/#.+$/,'');
  //   return url.replace(/#\w+/, '');
  //   return url.split('#').shift();
  //   return url.split('#', 1).join('');
}

console.log(removeUrlAnchor('www.codewars.com#about')); //'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')); //'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/')); //'www.codewars.com/katas/'
