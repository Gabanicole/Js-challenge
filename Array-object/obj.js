function formatPeopleArray(peopleArray) {
    const formattedData = {
        females: [],
        males: []
    };

    for (let i = 0; i < peopleArray.length; i++) {
        const personInfo = peopleArray[i].split(', ');
        const name = personInfo[0].split(' ');
        const firstName = name[0];
        const secondName = name[1];
        const age = parseInt(personInfo[1]);
        const gender = personInfo[2];

        const personObject = {
            'second-name': secondName,
            age: age
        };

        if (gender === 'female') {
            formattedData.females[firstName] = personObject;
        } else if (gender === 'male') {
            formattedData.males[firstName] = personObject;
        }
    }

    return formattedData;
}


const people = ["Patrick wyne, 30, male", "lil wyne, 32, male", "mimi, 21, female", "Nicole deck, 21, female", "Alian Dwine, 22, male", "Patrick wyne, 33, male", "Patrick wyne, 10, male", "Patrick wyne, 40, male"];
const formattedPeople = formatPeopleArray(people);
console.log(formattedPeople);
