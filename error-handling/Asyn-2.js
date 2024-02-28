let student = { name: "Eric" };

setStudentAgeApi(student, 20)
    .then((student) => {
        console.log(student);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

setStudentAgeApi(student, -10)
    .then((student) => {
        console.log(student);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
