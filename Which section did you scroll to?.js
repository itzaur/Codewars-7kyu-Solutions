/*
Description:

Your website is divided vertically in sections, and each can be of different size (height).
You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.
Example:

With scrollY = 300 and sizes = [300,200,400,600,100]

the result will be 1 as it's the second section.

With scrollY = 1600 and size = [300,200,400,600,100]

the result will be -1 as it's past last section.

Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).
*/
function getSectionIdFromScroll(scrollY, sizes) {
  return sizes.reduce((acc, size, i) => {
    if (scrollY < size) {
      return acc === -1 ? i : acc;
    }

    scrollY -= size;

    return acc;
  }, -1);
  ////////////////////////////////////////!SECTION
  //   var t = 0;

  //   return sizes.findIndex((e) => (t += e) > scrollY);
}

console.log(getSectionIdFromScroll(299, [300, 200, 400, 600, 100])); //0
console.log(getSectionIdFromScroll(300, [300, 200, 400, 600, 100])); //1
console.log(getSectionIdFromScroll(1600, [300, 200, 400, 600, 100])); //-1
