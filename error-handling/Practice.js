const addTotalFamilyMembers = async (families) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second

    for (let family of families) {
        if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
            throw new Error("Yves is not an allowed dad in 2022");
        }

        family.totalNumberOfFamilyMembers = Object.keys(family).length;
    }

    return families;
};

const families = [
    { fatherName: 'John', motherName: 'Mary', childrenNumber: 2 },
    { fatherName: 'Peter', motherName: 'Emma', childrenNumber: 3 },
    { fatherName: 'Yves', motherName: 'Sophie', childrenNumber: 1 }
];

(async () => {
    try {
        const result = await addTotalFamilyMembers(families);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
})();
