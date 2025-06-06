/*
Description:

Write function heron which calculates the area of a triangle with sides a, b, and c.

Heron's formula:
s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)}s∗(s−a)∗(s−b)∗(s−c)
​

where: s=a+b+c2 s = \dfrac{a + b + c} 2 s=2a+b+c​
Notes

    All inputs are valid triangles with integer sides.
    You do not need to round anything. Answers will be tested for correctness within a margin of 0.01.
*/
function heron(a, b, c) {
  return Math.sqrt(
    ((a + b + c) / 2) *
      ((a + b + c) / 2 - a) *
      ((a + b + c) / 2 - b) *
      ((a + b + c) / 2 - c)
  );
}

console.log(heron(3, 4, 5)); //6
console.log(heron(4, 4, 4)); //Math.sqrt(3) * 4
