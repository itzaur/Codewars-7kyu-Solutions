/*
Description:

You are given a length of string and two thumbtacks. One thumbtack goes into the focus point F₀ with coordinates x₀ and y₀, and the other goes into focus point F₁ with coordinates x₁ and y₁. The string is then tied at the ends to the thumbtacks and has length l excluding the knots at the ends. If you pull the string taught with a pencil and draw around the plane you'll have an ellipse with focuses at F₀ and F₁. Given a new point P, determine if it falls inside of the ellipse.

You must write a function that takes arguments f0, f1, l, and p and returns true or false depending on whether or not p falls inside the ellipse.

Each of f0, f1, and p has has properties x and y for its coordinates.

You will never be given the case where the string is too short to reach between the points.
*/
function ellipseContainsPoint(f0, f1, l, p) {
  return (
    Math.sqrt((f0.x - p.x) ** 2 + (f0.y - p.y) ** 2) +
      Math.sqrt((f1.x - p.x) ** 2 + (f1.y - p.y) ** 2) <=
    l
  );
  //////////////////////////////////////////////!SECTION
  //   return (
  //     Math.hypot(p.x - $0.x, p.y - $0.y) + Math.hypot(p.x - $1.x, p.y - $1.y) <= l
  //   );
}

console.log(
  ellipseContainsPoint({ x: 0, y: 0 }, { x: 0, y: 0 }, 2, { x: 0, y: 0 }),
); //true
console.log(
  !ellipseContainsPoint({ x: 0, y: 0 }, { x: 0, y: 0 }, 2, { x: 1, y: 1 }),
); //true
