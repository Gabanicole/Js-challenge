let setStudentAgeApi = async (student, age) => {
    console.log("1. Starting ..")
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("2. setting age for the student")
    student.age = age;
    console.log("3. Done ..")
 }
 
 let student = { name: "Eric" }
 setStudentAgeApi(student, 20).then(() => {
     console.log(student);
 });
 

    

    