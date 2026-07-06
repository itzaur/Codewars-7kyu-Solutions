/*
Description:

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius which is a number.

Write a function calculating distance between Circle a and Circle b.

If they're overlapping or one is completely within the other, just return zero.

Tests round answers to 6 decimal places, so you don't need to round them yourselves.
*/
function distanceBetweenCircles(a, b) {
  return Math.max(
    0,
    Math.hypot(a.center.x - b.center.x, a.center.y - b.center.y) -
      a.radius -
      b.radius,
  );
}

a = Circle(Point(10, 60), 11);
b = Circle(Point(40, 20), 7);
console.log(distanceBetweenCircles(a, b)); //32
