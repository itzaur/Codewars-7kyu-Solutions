/*
Description:

Amy and May aren't allowed by their parents to have cell phones, so they still communitcate in class the good old fashioned way, by writing notes.

So that no snoopy teachers can read any found notes, the girls communicate in code.

May is having a hard time deciphering Amy's latest messages, can you help her figure it out?

Input: String written in Amy's code Output: String decoded to Engligh so May can read it
*/
function decipher(codedMessage) {
  const ALPHABET_LENGTH = 26;
  const ASCII_OFFSET = 97;
  const POSITION_OFFSET = 7;

  const alphabet = Array.from({ length: ALPHABET_LENGTH }, (_, i) =>
    String.fromCharCode(i + ASCII_OFFSET)
  );
  const upperAlphabet = alphabet.map((char) => char.toUpperCase());

  return codedMessage.split``.map((char) => {
    if (char === ` `) return ` `;

    const isUpperCase = char === char.toUpperCase();
    const alphabetToUse = isUpperCase ? upperAlphabet : alphabet;

    const index = alphabetToUse.indexOf(char);

    if (index === -1) return char;

    const newIndex = (index + POSITION_OFFSET) % ALPHABET_LENGTH;

    return alphabetToUse[newIndex];
  }).join``;
  //////////////////////////////////////////////////////!SECTION
  //   const shift = (x, y = x >= 97 ? 97 : 65) => y + ((x - y + 7) % 26);
  //   return codedMessage.replace(/[a-z]/gi, (chr) =>
  //     String.fromCharCode(shift(chr.charCodeAt(0)))
  //   );
}

console.log(decipher('')); //''
console.log(
  decipher("lvahhe bl lh uhkbgz b vtg'm uxebxox maxkx tkx lh ftgr ahnkl exym")
); //'school is so boring i can\'t believe there are so many hours left'
console.log(decipher('HFZ FTR RHNK WKXLL BL LH VNMX')); //'OMG MAY YOUR DRESS IS SO CUTE'
console.log(
  decipher(
    'Axr Ftr! Pabva mxtvaxk wh rhn mabgd bl gbvxk, Fk. Chgxl hk Fkl. Itmxe?'
  )
); //'Hey May! Which teacher do you think is nicer, Mr. Jones or Mrs. Patel?'
