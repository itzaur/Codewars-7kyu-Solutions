/*
Description:

Fortunately last weekend, I met an utterly drunk old man. He was too drunk to be aggressive towards me. He was letting everything what he held out, from both his mind and his stomach. Although i was a bit uncomfortable, the old man's broken wisdom words caught my attention.

However, his talk was not continuous as it was frequently interrupted by an involuntary contractions  'puke' and 'hiccup' . Now i am hiring you to clean up his 'puke' and 'hiccup' and tell me the old man's wisdom words.

Because drunk man also needs to take a pause and take a deep breath, you have to remove those pauses (redundant/unnecessary spaces).
*/
function wdm(talk) {
  return talk
    .replace(/puke|hiccup/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  ////////////////////////////////////////!SECTION
  //   return talk
  //     .replace(/puke|hiccup/g, '')
  //     .replace(/\s{2,}/g, ' ')
  //     .trim();
  ////////////////////////////////////////!SECTION
  //   return talk.replace(/(?:puke|hiccup| )+/g, ' ').trim();
}

console.log(wdm("puke All's well hiccup     that ends hiccup well puke")); //"All's well that ends well"
console.log(
  wdm(
    'puke make hiccup hiccup money puke puke puke and hiccup hiccup puke spend hiccup puke puke it hiccup wisely.'
  )
); //'make money and spend it wisely.'
