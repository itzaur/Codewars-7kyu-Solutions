/*
Description:

As hex values can include letters A through to F, certain English words can be spelled out, such as CAFE, BEEF, or FACADE. This vocabulary can be extended by using numbers to represent other letters, such as 5EAF00D, or DEC0DE5.

Given a string, your task is to return the decimal sum of all words in the string that can be interpreted as such hex values.

Example
Working with the string "BAG OF BEES":

"BAG"  =  0, as it is not a valid hex value
"OF"   =  0F   =  15
"BEES" =  BEE5 =  48869
So the result is the sum of these: 48884 (0 + 15 + 48869)

Notes
Inputs are all uppercase and contain no punctuation
0 can be substituted for O
5 can be substituted for S
*/
function hexWordSum(string) {
  const result = string.replace(/[o]/gi, 0).replace(/[s]/gi, 5);

  return (
    result.split` `
      .map((el) => (el.match(/[g-z]/gi) ? 0 : parseInt(el, 16)))
      .reduce((acc, el) => acc + el, 0) || 0
  );
  ////////////////////////////////!SECTION
  //   return string
  //     .replace(/O/g, 0)
  //     .replace(/S/g, 5)
  //     .split(` `)
  //     .reduce((pre, val) => pre + (+`0x${val}` || 0), 0);
  ////////////////////////////////!SECTION
  //   return string
  //     .replace(/[OS]/g, (c) => ({ O: 0, S: 5 }[c]))
  //     .split(' ')
  //     .reduce((r, s) => (+('0x' + s) || 0) + r, 0);
}

console.log(hexWordSum('DEFACE')); //14613198
console.log(hexWordSum('SAFE')); //23294
console.log(hexWordSum('CODE')); //49374
console.log(hexWordSum('BUGS')); //0
console.log(hexWordSum('')); //0
console.log(hexWordSum('DO YOU SEE THAT BEE DRINKING DECAF COFFEE')); //13565769
console.log(hexWordSum('ASSESS ANY BAD CODE AND TRY AGAIN')); //10889952
