/*
Description:
Class conundrum - Bug Fixing #7
Oh no! Timmy's List class has broken! Can you help Timmy and fix his class? Timmy has a List class he has created, this is used for type strict arrays (which Timmy calls Lists).

When Timmy calls the count property of the list it still remains at 0 when adding items.

Also it fails when Timmy tries to chain the adds e.g.

myList.add(0).add(1)
*/
class List {
  constructor(type = 'string') {
    this.type = type;
    this.items = [];
    this.count = 0;
  }

  add(item) {
    if (typeof item !== this.type) {
      return `This item is not of type: ${this.type}`;
    }

    this.count++;
    this.items.push(item);

    return this;
  }
}

const myList = new List();

// console.log(myList.add('Hello')); //1
console.log(myList.add('Hello').count); //1
console.log(myList.add(5)); //`This item is not of type: string`
console.log(myList.add(' ').add('World!').count); //3
