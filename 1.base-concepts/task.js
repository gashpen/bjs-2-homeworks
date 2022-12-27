"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b * b) - 4 * a * c;
  let x1, x2;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d) )/(2 * a);
    x2 = (-b - Math.sqrt(d) )/(2 * a);
    arr.push(x1, x2)
  } 
  if (d == 0) {
    x1 = -b / (2 * a)
    arr.push(x1)
  } 
  return arr
}
console.log(solveEquation(1, 2, 1))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent / 100) / 12;
  let s = amount - contribution;
  let payment = (s * (p + (p / (((1 + p) ** countMonths) - 1)))) * countMonths;
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false
  }
  return Number(payment.toFixed(2));
}
calculateTotalMortgage(10, 0, 1000, 12)
