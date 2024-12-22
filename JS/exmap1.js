const students = [
    {name: "Danilo", testGrade: 7},
    {name: "Dani", testGrade: 5},
    {name: "Ingrid", testGrade: 9},
    {name: "Max", testGrade: 7},
]

const studentList = students.map ((student)=>{
    const finalYear = {
        name: student.name,
        testGrade: student.testGrade >= 7 ? "APPROVED":"DISAPPROVED"
    }
    return finalYear
})


console.log(studentList)