function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;

  return { min: min, max: max, avg: Number(avg.toFixed(2))};
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(arr.length == 0){
      return 0
    }
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
  }
  difference = max - min;
  return difference
}

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

function makeWork(arrOfArr, func) {
  let maxWorkerResult = - Infinity;
  let sumFunc = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    sumFunc = func(...arrOfArr[i]);
  }
  if(sumFunc > maxWorkerResult){
    maxWorkerResult = sumFunc
  }
  return maxWorkerResult
}
makeWork(arr, averageEvenElementsWorker)
