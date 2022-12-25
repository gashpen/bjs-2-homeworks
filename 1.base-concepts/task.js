"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = (b * b) - 4 * a * c;
  let x1, x2;
  if (D > 0) {
    x1 = (-b + Math.sqrt(D) )/(2 * a);
    x2 = (-b - Math.sqrt(D) )/(2 * a);
    arr.push(x1, x2)
    return arr
  } 
  if (D == 0) {
    x1 = -b / (2 * a)
    arr.push(x1)
    return arr
  } 
  if (D < 0){
    arr.push()
    return arr
  }
}
console.log(solveEquation(1, 2, 1))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return "Не число"
  }
  if (isNaN(contribution)) {
    return "Не число"
  }
  if (isNaN(amount)) {
    return "Не число"
  }
  let p = (percent / 100) / 12;
  let s = amount - contribution;
  let n = countMonths;
  let toBe;
  let toEqual;
  let payment = s * (p + (p / (((1 + p) ** n) - 1)));
  console.log(payment)
}
console.log(calculateTotalMortgage(10, contribution, 50000, 12))
