const getAge = function (birthYear, deathYear) {
    if (!deathYear) {
      deathYear = new Date().getFullYear();
    }

    return deathYear - birthYear;

  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        current.yearOfBirth,
        current.yearOfDeath
      );
      return oldestAge < currentAge ? current : oldest;

    });
  };

// Do not edit below this line
module.exports = findTheOldest;
