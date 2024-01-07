/*
DESCRIPTION:
Given an array of strings, sort the array into order of weight from light to heavy.

Weight units are grams(G), kilo-grams(KG) and tonnes(T).

Arrays will always contain correct and positive values aswell as uppercase letters.
*/
function arrange(arr) {
  const grammes = arr.filter((el) => !el.includes('KG') && !el.includes('T'));
  const kilograms = arr.filter((el) => el.includes('KG'));
  const tonnes = arr.filter((el) => el.includes('T'));

  const grammesNum = grammes.map((el) => el.match(/[0-9]/g).join``);
  const sortGrammes = grammesNum.sort((a, b) => a - b).map((el) => `${el}G`);

  const kilogramsNum = kilograms.map((el) => el.match(/[0-9]/g).join``);
  const sortKilograms = kilogramsNum
    .sort((a, b) => a - b)
    .map((el) => `${el}KG`);

  const tonnesNum = tonnes.map((el) => el.match(/[0-9]/g).join``);
  const sortTonnes = tonnesNum.sort((a, b) => a - b).map((el) => `${el}T`);

  return [...sortGrammes, ...sortKilograms, ...sortTonnes];

  //   var r = (s) => s.replace('KG', '000').replace('T', '000000').replace('G', '');
  //   return arr.sort((a, b) => r(a) - r(b));
}

// const arrange = (arr) =>
//   ((val) => arr.sort((a, b) => val(a) - val(b)))(
//     (val) =>
//       parseInt(val) * { G: 1, KG: 1000, T: 1000000 }[val.replace(/\d/g, ``)]
//   );

// const weights = { G: 1, KG: 1_000, T: 1_000_000 };

// const calcWeight = (s) => {
//   const [_, num, unit] = s.match(/^(\d+)(\w+)$/);
//   return +num * weights[unit];
// };

// const arrange = (arr) => arr.sort((a1, a2) => calcWeight(a1) - calcWeight(a2));

console.log(arrange(['200G', '300G', '150G', '100KG'])); //["150G","200G","300G","100KG"]
console.log(arrange(['400G', '100T', '150KG', '100G'])); //["100G","400G","150KG","100T"]
console.log(arrange(['4T', '300G', '450G', '900KG'])); //["300G","450G","900KG","4T"]
console.log(arrange(['400T', '100T', '1T', '100G'])); //["100G","1T","100T","400T"]
console.log(arrange(['1G', '2KG', '3T', '100KG'])); //["1G","2KG","100KG","3T"]
console.log(arrange(['100KG', '100G', '150T', '150KG'])); //["100G","100KG","150KG","150T"]
console.log(arrange(['223G', '401G', '481KG', '819T', '463T'])); //[ '223G', '401G', '481KG', '463T', '819T' ]
