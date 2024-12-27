/*
Description:
Find out why the amount of honey in the hive is not increasing.
*/
class Bee {
  constructor(capacity, hive) {
    this.capacity = capacity;
    this.hive = hive;
  }

  unloadPollen() {
    this.hive.addPollen(this.capacity);
  }
}

class Hive {
  constructor() {
    this.pollen = 100;
  }

  addPollen(pollen) {
    this.pollen += pollen;
  }

  getPollen() {
    return this.pollen;
  }
}

let hive = new Hive();
let bee = new Bee(11, hive);

console.log(bee.capacity); //11
console.log(hive.pollen); //100

bee.unloadPollen();

console.log(hive.pollen); //111
