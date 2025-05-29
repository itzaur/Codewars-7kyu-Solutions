/*
Description:
Description

You are a Fruit Ninja, your skill is cutting fruit. All the fruit will be cut in half by your knife. For example:

[  "apple",     "pear",     "banana"  ]  --> ["app", "le", "pe", "ar", "ban", "ana"]

As you see, all fruits are cut in half. You should pay attention to "apple": if you cannot cut a fruit into equal parts, then the first part will has a extra character.

You should only cut the fruit, other things should not be cut, such as the "bomb":

[  "apple",     "pear",     "banana",   "bomb"]  -->
["app", "le", "pe", "ar", "ban", "ana", "bomb"]

The valid fruit names are preloaded for you as:

fruitsName

Task

Complete function cutFruits that accepts argument fruits. Returns the result in accordance with the rules above.

OK, that's all. I guess this is a 7kyu kata. If you agree, please rank it as 7kyu and vote very;-) If you think this kata is too easy or too hard, please shame me by rank it as you want and vote somewhat or none :[
*/
function cutFruits(fruits) {
  const fruitsName = [
    'apple',
    'pear',
    'banana',
    'watermelon',
    'grape',
    'plum',
    'blueberry',
    'persimmon',
    'pomegranate',
    'pineapple',
    'orange',
    'mangosteen',
    'durian',
    'lemon',
    'pitaya',
    'carambola',
    'tomato',
    'apricot',
    'cherry',
    'coconut',
    'peach',
    'fig',
    'litchi',
    'ginkgo',
    'cantaloupe',
    'hawthorn',
    'mango',
    'jujube',
  ];

  return fruits.map((fruit) => {
    if (!fruitsName.includes(fruit)) return fruit;

    return [
      fruit.slice(0, Math.ceil(fruit.length / 2)),
      fruit.slice(Math.ceil(fruit.length / 2)),
    ];
  }).join`,`.split`,`;
}

console.log(cutFruits(['apple', 'pear', 'banana'])); //["app","le","pe","ar","ban","ana"]
console.log(cutFruits(['apple', 'pear', 'banana', 'bomb'])); //["app","le","pe","ar","ban","ana","bomb"]
