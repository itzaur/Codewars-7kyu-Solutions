/*
Description:

Given multiple lists (name, age, height), each of size n :

An entry contains one name, one age and one height. The attributes corresponding to each entry are determined by the index of each list. For example, the first entry is comprised of the first elements of each list, the second entry is comprised of the second elements of each list, etc.

A duplicate entry is one in which the name, age and height are ALL the same.

Write a function which takes in the attributes for each entry and returns an integer for the number of duplicated entries. For a set of duplicates, the original entry should not be counted as a duplicate.
*/
function countDuplicates(name, age, height) {
  const duplicates = {};

  for (let i = 0; i < name.length; i++) {
    const key = `${name[i]}-${age[i]}-${height[i]}`;

    duplicates[key] = (duplicates[key] || 0) + 1;
  }

  return Object.values(duplicates).reduce(
    (acc, el) => acc + Math.max(0, el - 1),
    0
  );
  //////////////////////////////////////////////////!SECTION
  //   return (
  //     name.length -
  //     new Set(name.map((n, i) => `${n}|${age[i]}|${height[i]}`)).size
  //   );
}

let name = ['John', 'Beth', 'Beth', 'Bill'];
let age = [37, 23, 30, 46];
let height = [183, 170, 165, 175];
console.log(countDuplicates(name, age, height)); //0

name = ['John', 'Beth', 'Beth', 'Beth', 'Bill'];
age = [37, 23, 23, 23, 46];
height = [183, 170, 170, 170, 175];
console.log(countDuplicates(name, age, height)); //2

name = ['Jack', 'Ben', 'Jack', 'Ben', 'Jack', 'Jack'];
age = [25, 25, 34, 25, 25, 34];
height = [180, 180, 200, 180, 180, 200];
console.log(countDuplicates(name, age, height)); //3
