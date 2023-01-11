function compareArrays(arr1, arr2) {
    if(arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])){
      return true
    } else {
      return false
    }
  }

  function getUsersNamesInAgeRange(users, gender) {
    let totalGender = 0;
    if (gender !== 'мужской' && gender !== 'женский') {
      return 0
    };
    let result = users.filter(peoples => peoples.gender.includes(gender)).reduce((acc, averageAge) => {
      return totalGender++, acc + averageAge.age;
    }, 0);
    if (totalGender === 0) {
      return 0
    }
    return result / totalGender
  };
  console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
  console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
  console.log(getUsersNamesInAgeRange([], "женский")); // 0
  console.log(getUsersNamesInAgeRange(people, "инопланетянин"));