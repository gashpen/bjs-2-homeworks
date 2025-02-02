﻿function parseCount(arg) {
  let parseCount = Number.parseFloat(arg);
  if(Number.isNaN(parseCount)) {
    throw new Error("Невалидное значение")
  } 
   return parseCount; 
  }

function validateCount(arg) {
  try {
  return parseCount(arg);
  } catch (error) {
    return error
  }
}

class Triangle {
  constructor(a, b, c) {
    if ((a >= b + c) || (c >= a + b) || (b >= c + a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  get perimeter() {
    return this.a + this.b + this.c
  }
  get area() {
    const p = 0.5 * this.perimeter;
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
  }
  
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c)
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует"
      },
      get area() {
        return "Ошибка! Треугольник не существует"
      }
    }
  }
}
