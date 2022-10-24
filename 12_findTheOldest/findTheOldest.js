const findTheOldest = function(people) {
    function getAge(yearOfBirth, yearOfDeath) {
        let age
        const currentYear = new Date().getFullYear()
        if (!yearOfDeath) {
            age = currentYear - yearOfBirth
        } else {
            age = yearOfDeath - yearOfBirth
        }
        return age
    }

    return people.reduce((currPerson, nextPerson) => {
        const currPersonAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath)
        const nextPersonAge = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath)
        console.log(`${currPerson.name} is ${currPersonAge} years while ${nextPerson.name} is ${nextPersonAge} years`)
        return currPersonAge > nextPersonAge ? currPerson : nextPerson
    })
    
};

// Do not edit below this line
module.exports = findTheOldest;
