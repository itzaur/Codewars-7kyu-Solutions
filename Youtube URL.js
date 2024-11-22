/*
Description:
There are many kinds of links to the video:

https://www.youtube.com/embed/UN8oLGBNXpE - is correct for iframe

https://www.youtube.com/watch?v=UN8oLGBNXpE

http://www.youtube.com/watch?v=UN8oLGBNXpE

https://youtu.be/UN8oLGBNXpE
If we insert the first link in the iframe, it works, but another do not work.

Task:
Please write a function that converts the string in the correct format for the iframe.
*/
function makeYoutubeLink(str) {
  const length = 11;

  return `https://www.youtube.com/embed/${str.split`=`.at(-1).slice(-length)}`;
  //////////////////////////////////////////!SECTION
  //   return str.replace(/^.+?(\w+)$/, 'https://www.youtube.com/embed/$1');
  //////////////////////////////////////////!SECTION
  //   return `https://www.youtube.com/embed/${str.match(/\w+$/)}`;
  //////////////////////////////////////////!SECTION
  //   return str.replace(/.+\/(.+\=)?/g,'https://www.youtube.com/embed/')
  //////////////////////////////////////////!SECTION
  //   return `https://www.youtube.com/embed/${str.slice(-11)}`;
}

console.log(makeYoutubeLink('https://www.youtube.com/embed/L3JxAuUyjzY')); //"https://www.youtube.com/embed/L3JxAuUyjzY"
console.log(makeYoutubeLink('https://www.youtube.com/watch?v=L3JxAuUyjzY')); //"https://www.youtube.com/embed/L3JxAuUyjzY"
console.log(makeYoutubeLink('https://youtu.be/L3JxAuUyjzY')); //"https://www.youtube.com/embed/L3JxAuUyjzY"
