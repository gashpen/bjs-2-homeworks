function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }

  function getUsersNamesInAgeRange(users, gender) {
    if (users == 0) {
      return 0
    }
    return people.filter(people => people.gender === gender).reduce(((acc, averageAge, index, people) => acc + averageAge.age / people.length), 0);
  };