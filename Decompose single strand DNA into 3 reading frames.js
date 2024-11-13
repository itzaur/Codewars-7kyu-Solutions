/*{3}
Description:
In genetics a reading frame is a way to divide a sequence of nucleotides (DNA bases) into a set of consecutive non-overlapping triplets (also called codon). Each of this triplets is translated into an amino-acid during a translation process to create proteins.

Input
In a single strand of DNA you find 3 Reading frames, take for example the following input sequence:

AGGTGACACCGCAAGCCTTATATTAGC
Output
For the output we are going to take the combinations and show them in the following manner:

Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC
Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC
Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C
For frame 1 split all of them in groups of three starting by the first base (letter).

For frame 2 split all of them in groups of three starting by the second base (letter) but having the first base (letter) at the beggining.

For frame 3 split all of them in groups of three starting by the third letter, but having the first and second bases (letters) at the beginning in the same order.
*/
const decomposeSingleStrand = (singleStrand) => {
  const addSpace = (str) => str.replace(/(.{3})/g, '$1 ');

  const frame1 = addSpace(singleStrand).trim();
  const frame2 = singleStrand[0] + ' ' + addSpace(singleStrand.slice(1));
  const frame3 =
    singleStrand.slice(0, 2) + ' ' + addSpace(singleStrand.slice(2));

  return `Frame 1: ${frame1}\nFrame 2: ${frame2}\nFrame 3: ${frame3}`;
  //////////////////////////////////////////!SECTION
  //   return [
  //     `Frame 1: ${singleStrand.match(/.../g).join(' ')}`,
  //     `Frame 2: ${singleStrand.match(/^.|...|..$/g).join(' ')}`,
  //     `Frame 3: ${singleStrand.match(/^..|...|.$/g).join(' ')}`,
  //   ].join('\n');
  //////////////////////////////////////////!SECTION
  //   return [...Array(3)]
  //     .map(
  //       (_, idx) =>
  //         `Frame ${idx + 1}: ${singleStrand
  //           .match(new RegExp(`^.{${idx || 3}}|.{3}|.+$`, `g`))
  //           .join(` `)}`
  //     )
  //     .join(`\n`);
  //////////////////////////////////////////!SECTION
  //   const partition = (line, offset) =>
  //     line
  //       .split('')
  //       .map((l, i) => ((i + offset) % 3 ? l : ' ' + l))
  //       .join('')
  //       .trim();

  //   return [
  //     'Frame 1: ' + partition(singleStrand, 0),
  //     'Frame 2: ' + partition(singleStrand, -1),
  //     'Frame 3: ' + partition(singleStrand, 1),
  //   ].join('\n');
};

console.log(decomposeSingleStrand('AGGTGACACCGCAAGCCTTATATTAGC')); //"Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC\nFrame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC\nFrame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C"
