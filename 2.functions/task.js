function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max)
      max = arr[i];
    if (arr[i] < min)
      min = arr[i];
    sum += arr[i];
  }
  avg = sum / arr.length;

  return { min: min, max: max, avg: Number(avg.toFixed(2))};
}

getArrayParams(-99, 99, 10)

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
  sum += arr[i];
  }
  return sum
}
summElementsWorker(1,2,3)

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max)
      max = arr[i];
    if (arr[i] < min)
      min = arr[i];
  }
  difference = max - min;
  return difference
}
differenceMaxMinWorker(10, 10, 11, 20, 10)

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i]
    }
  }
  return sumEvenElement - sumOddElement
}
differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
      countEvenElement++
    }
  }
  return sumEvenElement / countEvenElement
}
averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;
  for(let i = 0;i < arrOfArr.length; i++)
    arrOfArr[i] = func(...i)
}
