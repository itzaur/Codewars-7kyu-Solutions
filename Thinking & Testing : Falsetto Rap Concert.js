/*
Description:

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function testit(s) {
  return s.replace(/\w/g, (el, i) =>
    ((value) =>
      ({ 91: `A`, 64: `Z`, 123: `a`, 96: `z` })[value] ||
      String.fromCharCode(value))((-1) ** i + el.charCodeAt(0)),
  );
  //////////////////////////////////////////!SECTION
  //   return s.replace(/[a-z]/gi, (m, i) => {
  //     const c = String.fromCharCode(m.charCodeAt(0) + (i % 2 ? -1 : 1));
  //     return { '[': 'A', '{': 'a', '@': 'Z', '`': 'z' }[c] || c;
  //   });
}

console.log(testit('Xp Zn, Dgfbl ugjr nvs! Fufqz ohhgu jm lz eqfznr')); //"Yo Yo, Check this out! Every night in my dreams", ""
console.log(testit('Ni zdbg! J tdf znv, H efdm znv')); //                 "Oh yeah! I see you, I feel you", ""
console.log(testit('Ovs xpts izoct vo! Ugbs ht inx J lmpv xpt fp pm')); //"Put your hands up! That is how I know you go on", ""
console.log(testit('Bplf pm dwdsxcnex! Gzs bbsntr sid cjruzobf')); //     "Come on everybody! Far across the distance", ""
console.log(testit('Kjrudo vo! Bme tobbfr afsxdfm tt')); //               "Listen up! And spaces between us", ""
console.log(testit('Obqux sjlf! Xpt gbuf dnnd sp tgpv xpt fp pm')); //    "Party time! You have come to show you go on", ""
