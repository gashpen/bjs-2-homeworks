function parseCount(arg) {
  if (Number.isNaN(Number.parseFloat(arg))) {
    throw new Error("Невалидное значение");
  }
  return parseFloat(arg);
}

function validateCount(arg) {
  try {
    parseCount(arg);
  } catch (error) {
    console.log(error);
  } finally {
    return parseCount(arg);
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
    return a + b + c
  }
  get area() {
    let p = 0.5 * (a + b + c);
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
  }
  getTriangle(a, b, c) {
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
}

