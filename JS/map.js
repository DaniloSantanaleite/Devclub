const numbers = [1,2,3,4]

const newArray = numbers.map((number) =>{
return number*2
})

console.log(newArray)


const students = [
    {name: 'Danilo', age: 25},
    {name: 'Dani', age: 20},
    {name: 'Daniel', age: 25},
    {name: 'Ingrid', age: 23},
    {name: 'Ted', age: 15},
];

const newStudents = students.map((student) =>{

    const newStudent = {
        name: student.name + "  Da Silva",
        age: student.age - 5
    }

    return newStudent
})

console.log(newStudents)
console.log(students)
