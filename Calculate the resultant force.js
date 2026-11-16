/*
Description:

Given two forces (F1 and F2 ) and the angle F2 makes with F1 find the resultant force R and the angle it makes with F1.
input

Three values :

    F1
    F2 making an angle θ with F1
    angle θ

output

An array consisting of two values :

    R (the resultant force)
    angle R makes with F1 (φ)

notes

Units for each of the following are given as under :

    F1 = Newton
    F2 = Newton
    angle θ = degree
    R = Newton
    φ = degree

*/
function solution(force1, force2, theta) {
  const thetaInRadians = (theta * Math.PI) / 180;
  const resultantForce = Math.sqrt(
    force1 ** 2 + force2 ** 2 + 2 * force1 * force2 * Math.cos(thetaInRadians),
  );
  const angleWithF1 =
    (Math.atan2(
      force2 * Math.sin(thetaInRadians), // y
      force1 + force2 * Math.cos(thetaInRadians), // x
    ) *
      180) /
    Math.PI;

  return [resultantForce, angleWithF1];
}

console.log(solution(20, 10, 120)); //[17.320508075688775, 29.999999999999996]
console.log(solution(110, 45, 45)); //[145.34564710973225, 12.645904708568862]
