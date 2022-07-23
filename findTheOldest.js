const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = ""
    for (let person of people) {
        if (person.yearOfDeath === undefined) {
            const d = new Date()
            if (d.getFullYear() - person.yearOfBirth > oldestAge) {
                oldestAge = d.getFullYear() - person.yearOfBirth;
                oldestPerson = person.name;
            }
        }
        else {
            if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
                oldestAge = person.yearOfDeath - person.yearOfBirth;
                oldestPerson = person.name;
            }
        }
        console.log(oldestPerson)
    };
    return people.find(person => person.name = oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
