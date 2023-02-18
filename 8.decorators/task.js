//Задача № 1
    function cachingDecoratorNew(func) {
        let cache = [];
        
        function wrapper(...args) {
            const hash = md5(args); // получаем правильный хеш c помощью функции md5
            let objectInCache = cache.find((item) => item === cache[hash]); // ищем элемент, хеш которого равен нашему хешу
            if (objectInCache) { // если элемент найден
                console.log("Из кэша: " + cache[hash]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
                return "Из кэша: " + cache[hash];
            }
        
            let result = func(...args); // в кеше результата нет — придётся считать
            cache.push(hash) ; // добавляем элемент с правильной структурой
            if (cache.length > 5) { 
              cache = cache.shift()// если слишком много элементов в кеше, надо удалить самый старый (первый) 
            }
            console.log("Вычисляем: " + result);
            return "Вычисляем: " + result;  
        }
        return wrapper;
        }


        

//Задача № 2
const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

function debounceDecoratorNew(func, delay) {
  let isThrottled = false;
  let allCount = [];
  let count = 0;
  function wrapper(...args){
    if(isThrottled){
      return;
    }
    const result = func(...args);
    isThrottled = true;
    setInterval(() => isThrottled = false, delay);
    setTimeout(() => func(args), delay);
    count++;
    return result;
  }
  wrapper.count = () => count;
  return wrapper
}

let throttledSum = debounceDecoratorNew(sum, 3000);
throttledSum(123,123,123);