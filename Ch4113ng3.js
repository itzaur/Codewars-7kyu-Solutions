/*
Description:
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/
function nerdify(txt) {
  return txt.replace(
    /[aelAE]/g,
    (el) => ({ a: 4, e: 3, l: 1 }[el.toLowerCase()])
  );
}

console.log(nerdify('Fund4m3nt41s')); //"Fund4m3nt41s"
console.log(nerdify('Seven')); //"S3v3n"
console.log(nerdify('Los Angeles')); //"Los 4ng313s"
console.log(nerdify('Seoijselawuue')); //"S3oijs314wuu3"
