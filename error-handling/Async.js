let setStudentAgeApi = (student, age, callback) => {
    console.log("1. Starting ..");
    setTimeout(() => {
        console.log("2. setting age for the student");
        student.age = age;
        console.log("3. Done ..");
        callback(student); 
    }, 500);
};

let student = { name: "Eric" };

setStudentAgeApi(student, 20, (updatedStudent) => {
    console.log(updatedStudent);
});

    

    