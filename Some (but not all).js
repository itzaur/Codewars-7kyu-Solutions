/*
Description:
Some but not all
Description
Your task is to create a function that given a sequence and a predicate, returns True if only some (but not all) the elements in the sequence are True after applying the predicate

Examples
('abcdefg&%$', x -> isLetter(x)) == true
('&%$=', x -> isLetter x) == false
('abcdefg', x -> isLetter x) == false

([4, 1], x -> x > 3) == true
([1, 1], x -> x > 3) == false
([4, 4], x -> x > 3) == false
*/
const someButNotAll = (seq, pred) => {
  const arr = [...seq];

  return arr.some((el) => pred(el)) && !arr.every((el) => pred(el));
};
////////////////////////////////////////////////!SECTION
// const someButNotAll = ([...seq], pred) => seq.some(pred) && !seq.every(pred);

console.log(
  someButNotAll(
    [
      true,
      true,
      false,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      true,
    ],
    (x) => ~x
  )
); //false
console.log(someButNotAll('abcdefg&%$', (str) => /[a-z]/i.test(str))); //true
console.log(someButNotAll('&%$=', (str) => /[a-z]/i.test(str))); //false
console.log(someButNotAll('abcdefg', (str) => /[a-z]/i.test(str))); //false
console.log(someButNotAll([4, 1], (x) => x > 3)); //true
console.log(someButNotAll([1, 1], (x) => x > 3)); //false
console.log(someButNotAll([4, 4], (x) => x > 3)); //false
console.log(
  someButNotAll(
    [
      'yVQzKjQbbzYYItfiqeoXofUvJOxMAgxPXlZdwUH',
      'TLAyZGVTupNJycnQWGqrSZSslYAcwamndhwQRNkNgWZMCvGUDwWeNyKQNeP',
      'aWFtkqHuxPwEtlmTFmwRgbCRGWEMURfrRIrexmeRGdLC',
      'RrnVbVrtvJ',
      'FyElwpOAUsJGtTfJOZcxBnTlKesNNZWRTbVE',
      'xfjlbaPPvXDxQcMqcKzsTCueQbzwsdG',
      'AqxsSYO',
      'WNhMFxJqnDgKvuJLrVsjkZAPDGGgYHIaaIrr',
      'HrlaBVejbHjdEhJJRkLZtQRuqDOFBKl',
      'tXEbFJxQJNlAPCrVMcCBMaMBvjRLQNyV',
      'ClIpzRxrvSrlEha',
      'gXhXp',
      'rcLoIsKDTVxKyRZGyF',
      '',
      'JxFghhGyZuMwCEtgSdvRqZrDaJsnKybTWEvZOJA',
      'NxQcHakPzCReJMIZdIybH',
      'LyTEQbLjhWxCXmgamiJlPZ',
      'TDULmSiKwAnxSRhGDF',
      'ccNBPhlAztirgghuaOrpVYYSrINCxkKNxLrtOhYpwxB',
      'VCMIleLWqINtOrSiJJUJhPCPuj',
      'RaTYxQThwNZqbywcLvllTKrcvn',
      'wcPM',
      'WMchMgRLUBugGyxqZWdeiHPgAitQQoOoHIX',
      'bz',
      'HKzJJDrPLwEfbPkzHZrtoAyzeUkZnrvsznoK',
      'tIubHwaJfCicCWraVSeFINWfzYV',
      'qXcjZJXYXNJoeeQfZqihjPhDGKdnmxnMUDAwlBWVzpNb',
      'QEmLHwCyFEyucRmfXyADOpfsL',
    ],
    (x) => parseInt(x)
  )
); //false
